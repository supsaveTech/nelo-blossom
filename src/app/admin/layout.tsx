import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin - Nelo Blossom Empire',
  description: 'Admin Dashboard',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted/40 p-4">
        <div className="font-bold mb-8">Nelo Admin</div>
        <nav className="flex flex-col gap-2">
          <a href="/admin/dashboard" className="text-sm font-medium hover:underline">Dashboard</a>
          <a href="/admin/products" className="text-sm font-medium hover:underline">Products</a>
          <a href="/admin/categories" className="text-sm font-medium hover:underline">Categories</a>
          <a href="/admin/orders" className="text-sm font-medium hover:underline">Orders</a>
          <a href="/admin/customers" className="text-sm font-medium hover:underline">Customers</a>
          <a href="/admin/settings" className="text-sm font-medium hover:underline">Settings</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
