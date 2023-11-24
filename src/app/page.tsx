'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <Button onClick={() => signOut()}>Logout</Button>
      ) : (
        <Button onClick={() => signIn()}>Login</Button>
      )}
    </div>
  );
}
