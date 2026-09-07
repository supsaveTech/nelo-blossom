import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Nelo Blossom Empire',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-muted/10">
      <Link href="/" className="mb-8">
        <Image src="/assets/logo.jpg" alt="Nelo Blossom Empire" width={160} height={160} className="h-16 w-auto object-contain" />
      </Link>

      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to your account</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="••••••••" />
          </div>
          <Button type="button" className="w-full" size="lg">Sign In</Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-primary font-medium hover:underline">Create account</Link>
        </p>
      </div>
    </div>
  );
}
