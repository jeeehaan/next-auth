'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCredentialsLogin = () => {
    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };

  const handleGithubLogin = () => {
    signIn('github');
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-[300px] flex flex-col gap-3">
        <Input size="md" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <Input size="md" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleCredentialsLogin}>Login</Button>
        <Button onClick={handleGithubLogin} variant="secondary">Continue with Github</Button>
      </div>
    </main>
  );
};
