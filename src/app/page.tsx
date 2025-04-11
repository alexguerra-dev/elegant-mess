import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Hello, World!</h1>
            <h2>Welcome to my webpage</h2>
            <p>
                This is a simple webpage for my life. It is a work in progress.
            </p>
            <Link href="/about">About</Link>
            {/* Figure out how to effectively add an iframe from Spotify */}
            <iframe
                src="https://open.spotify.com/embed/track/1XrSjpNe49IiygZfzb74pk?utm_source=generator"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    )
}
