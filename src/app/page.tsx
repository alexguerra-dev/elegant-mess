export default function Home() {
    return (
        <div>
            <h1>Hello, World!</h1>

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
