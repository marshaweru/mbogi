import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css';

export const metadata = {
    title: 'Mbogi',
    description: 'A Next.js 13 Meta Threads clone'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ 
    children 
}: { 
    children: React.ReactNode
 }) {
    return (
      <ClerkProvider> /*Wrap layout with clerkProvider to allow use all of clerks functionalities*/
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
      </ClerkProvider>
    )
}