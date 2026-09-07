import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account | Nelo Blossom Empire',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-muted/10">
      <Link href="/" className="mb-8">
        <Image src="/assets/logo.jpg" alt="Nelo Blossom Empire" width={160} height={160} className="h-16 w-auto object-contain" />
      </Link>

      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Create an Account</h1>
          <p className="text-sm text-muted-foreground mt-1">Join the Nelo Blossom community</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First name</label>
              <input type="text" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last name</label>
              <input type="text" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="tel" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="+234 000 000 0000" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full rounded-md border bg-background px-3 py-2.5 text-sm" placeholder="••••••••" />
          </div>
          <Button type="button" className="w-full" size="lg">Create Account</Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="text-primary font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
