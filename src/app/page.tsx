'use client';

import { signOut, useSession } from 'next-auth/react';

import { Login } from '@/components/Auth/Login';
import { Button } from '@/components/ui/button';

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div className="flex justify-between p-8">
          <div>Next-Auth</div>
          <div className="flex gap-4 items-center">
            <div>{session.user?.name}</div>
            <img src={session.user?.image} alt="" width={40} height={40} className="rounded-full" />
            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
