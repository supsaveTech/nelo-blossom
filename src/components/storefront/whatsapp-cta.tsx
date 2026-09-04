'use client';

import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppCTAProps {
  contextualMessage?: string;
}

export function WhatsAppCTA({ contextualMessage }: WhatsAppCTAProps) {
  
  // Hardcoded for UI Phase 2A, will be replaced by DB settings later
  const supportNumber = '2340000000000'; 
  
  const defaultMessage = "Hello Nelo Blossom Empire, I would like to make an enquiry about your products.";
  const message = contextualMessage || defaultMessage;
  
  const waLink = `https://wa.me/${supportNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebd5a] hover:scale-110 transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-full before:bg-[#25D366] before:animate-ping before:opacity-30 before:z-[-1]"
      )}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
