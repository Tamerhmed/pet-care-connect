import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/style/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PetCareConnect - Pet daycare software',
  description:
    'We make pet care easy, efficient, and personalized for peace of mind.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} text-sm text-zinc-900 bg-[#E5E8EC] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
