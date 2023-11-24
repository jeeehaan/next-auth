import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import prisma from '@/db/utils/prisma';

export const options: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { type: 'email', label: 'Email', placeholder: 'Enter your email' },
        password: { type: 'password', label: 'Password', placeholder: 'Enter your password' },
      },
      authorize: async (credential) => {
        const email = credential?.email;
        const password = credential?.password;

        const findUser = await prisma.user.findUnique({
          where: {
            email,
            password,
          },
        });

        if (findUser) {
          return {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            image: findUser.image,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {},
};
