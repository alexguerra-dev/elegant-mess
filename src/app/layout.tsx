import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Elegant Mess - Pop!',
    description: 'A webpage for my life.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <header className="bg-gray-900 text-white">
                <h1 className="text-3xl font-bold">Elegant Mess</h1>
                <h2 className="text-2xl font-bold">Pop!</h2>
                <p className="text-lg">A webpage for my life.</p>
                <p className="text-sm">
                    This is a simple webpage for my life. It is a work in
                    progress.
                </p>
            </header>
            <body>{children}</body>
        </html>
    )
}
