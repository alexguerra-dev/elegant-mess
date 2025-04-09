import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Elegant Mess - The Family',
    description: 'A webpage for my life.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
