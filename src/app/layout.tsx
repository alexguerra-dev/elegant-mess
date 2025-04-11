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
            <body className="w-full h-full absolute bg-gray-800 text-gray-400">
                <header className="flex justify-between items-center px-8 py-6 md:px-32 bg-white drop-shadow-medium">
                    <div className="">
                        <h1 className="text-3xl font-bold">Elegant Mess</h1>
                        <h2 className="text-2xl font-bold">Pop!</h2>
                    </div>
                    <div>
                        <p className="text-lg">A webpage for my life.</p>
                        <p className="text-sm">
                            This is a simple webpage for my life. It is a work
                            in progress.dddd
                        </p>
                    </div>
                    <nav className="flex space-x-4">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </header>

                {children}
            </body>
        </html>
    )
}
