import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Account - Nelo Blossom Empire',
  description: 'Manage your Nelo Blossom Empire account',
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="font-bold">Nelo Blossom Empire</div>
          <nav className="flex items-center gap-4">
            <a href="/shop" className="text-sm font-medium hover:underline">Return to Shop</a>
            <a href="/account" className="text-sm font-medium hover:underline">Dashboard</a>
          </nav>
        </div>
      </header>
      <div className="container flex-1 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-2">
            <nav className="flex flex-col gap-2">
              <a href="/account/profile" className="text-sm font-medium hover:underline">Profile</a>
              <a href="/account/orders" className="text-sm font-medium hover:underline">Orders</a>
              <a href="/account/addresses" className="text-sm font-medium hover:underline">Addresses</a>
            </nav>
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}
