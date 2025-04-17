import type { Metadata } from 'next'
import Link from 'next/link'

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
            <body className=" flex flex-col w-full h-full justify-between absolute bg-gradient-to-r from-sky-500 to-indigo-600 max-h-screen">
                <header className="flex justify-between items-center px-8 py-6 md:px-32 bg-gray-500 drop-shadow-medium">
                    <div className="">
                        <h1 className="text-8xl font-bold">
                            <Link href="/">Elegant Mess</Link>
                        </h1>
                        <h2 className="text-3xl font-bold">Pop!</h2>
                    </div>
                    <div>
                        <p className="text-lg">A webpage for my life.</p>
                        <p className="text-sm">
                            This is a simple webpage for my life. It is a work
                            in progress.dddd
                        </p>
                    </div>
                    <nav className="flex space-x-4">
                        <p className="underline">
                            <Link className="underline text-4xl" href="/about">
                                About
                            </Link>
                        </p>
                        <Link className="underline" href="/projects">
                            Projects
                        </Link>
                        <Link className="underline" href="/contact">
                            Contact
                        </Link>
                        <Link className="underline" href="/">
                            Home
                        </Link>
                    </nav>
                </header>

                {children}

                <footer className="flex justify-center items-center px-8 py-6 md:px-32 bg-gray-500 drop-shadow-medium">
                    <div className="text-center">
                        <p className="text-lg">© 2023 Elegant Mess</p>
                        <p className="text-sm">
                            All rights reserved. Made with love.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <Link className="underline" href="/privacy">
                            Privacy Policy
                        </Link>
                        <Link className="underline" href="/terms">
                            Terms of Service
                        </Link>
                        <Link className="underline" href="/contact">
                            Contact
                        </Link>
                        <Link className="underline" href="/">
                            Home
                        </Link>
                    </div>
                </footer>
            </body>
        </html>
    )
}
