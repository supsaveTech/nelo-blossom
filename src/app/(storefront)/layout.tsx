import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nelo Blossom Empire',
  description: 'Your Beauty, Wellness & Self-Care Destination',
}

import { Header } from "@/components/storefront/header";
import { Footer } from "@/components/storefront/footer";
import { WhatsAppCTA } from "@/components/storefront/whatsapp-cta";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
      <WhatsAppCTA />
    </div>
  )
}
