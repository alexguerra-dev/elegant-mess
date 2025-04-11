import Link from 'next/link'

export default function Home() {
    return (
        <div className="">
            <h1 className="text-9xl text-amber-500">Hello, World!</h1>

            <h2 className="text-4xl text-emerald-500">Welcome to my webpage</h2>
            <p className="text-2xl text-cyan-900">
                This is a simple webpage for my life. It is a work in progress.
            </p>
            <Link className="text-red-500" href="/about">
                About
            </Link>

            <div className="w-10 h-10 bg-amber-200"></div>
            <div className="w-10 h-10 bg-amber-200"></div>
            <p className="text-5xl text-shadow-black shadow-2xl text-red-400">
                I want to learn to make cool stuff
            </p>
            <p>I am also playing with tailwinds</p>

            <ul className="flex justify-between text-emerald-700">
                <li>Juggling</li>
                <li>Cooking</li>
                <li>Crafting</li>
                <li>Drawing</li>
                <li>Music</li>
            </ul>
            <h3>It is ok to just write things</h3>
            <p>No one is going to see this.</p>
            <h2>Cool little things to build</h2>
            <ul>
                <li>A hanafuda card component</li>
                <li>A task list</li>
                <li>Bird song bingo or memory game</li>
            </ul>
            <div className="bg-emerald-400">
                <h2 className="text-5xl">My Favorite Music</h2>
                <div className="bg-red-200 flex">
                    <h2>A thought</h2>
                    <p>This is the best thing ever</p>
                </div>
                <p className="text-3xl">
                    I really like music. I listen to a lot of music. I listen to
                    a lot of different kinds of music. I listen to a lot of
                    different kinds of music from a lot of different kinds of
                    people.
                </p>
                <iframe
                    src="https://open.spotify.com/embed/track/1XrSjpNe49IiygZfzb74pk?utm_source=generator"
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-green-800 text-white p-4">
                <h2>My Interests</h2>
                <ul>
                    <li>Music</li>
                    <li>Podcasts</li>
                    <li>Audiobooks</li>
                    <li>Books</li>
                    <li>Movies</li>
                </ul>

                <h2 className="text-5xl">My Projects</h2>
                <ul>
                    <li>
                        <p className="text-3xl">
                            <Link href="/pile">Pile</Link>
                        </p>
                        <p>
                            <Link href="/projects/dnd">Dnd</Link>
                        </p>
                        <p className="text-lg">
                            A simple card game. It is a work in progress. I am
                            using this project to learn more about TypeScript
                            and React. I am also using this project to learn
                            more about Next.js. I am using this project to learn
                            more about Tailwind CSS. I am using this project to
                            learn more about how to deploy a Next.js app. I am
                            using this project to learn more about how to deploy
                            a Next.js app to Vercel. I am using this project to
                            learn more about how to deploy a Next.js app to
                            Vercel with a custom domain. I am using this project
                            to learn more
                        </p>
                        <Link href="/projects/task-list">Task List</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
