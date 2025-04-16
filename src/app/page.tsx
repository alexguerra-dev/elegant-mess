import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex ">
            <div>
                <h1 className="text-9xl text-amber-500">Hello, World!</h1>
                <Link href="/projects/hanafuda">
                    <Image
                        src="/images/hanafuda/january-1.svg"
                        height="839"
                        width="512"
                        alt="Hanafuda card"
                    ></Image>
                </Link>

                <h2 className="text-4xl text-emerald-500">
                    Welcome to my webpage
                </h2>
                <div>
                    <p className="text-2xl text-cyan-900">
                        This is a simple webpage for my life. It is a work in
                        progress.
                    </p>
                    <Link
                        className="text-red-500 text-4xl underline"
                        href="/about"
                    >
                        About
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <p className="text-5xl text-shadow-black shadow-2xl text-red-400">
                        I want to learn to make cool stuff
                    </p>
                    <p>
                        Alice was very glad to find her in such a pleasant
                        temper, and thought to herself that perhaps it was only
                        the pepper that had made her so savage when they met in
                        the kitchen.
                    </p>
                </div>
                <div>
                    <Image
                        src="/images/gifs/dance.gif"
                        alt="A picture of me when I do something good."
                        width={400}
                        height={400}
                        unoptimized
                        className="rounded-full border-4 border-emerald-500 shadow-2xl"
                    />
                </div>
                <div>
                    <h2>Hobbies</h2>
                    <ul className="flex justify-between text-emerald-700">
                        <li className="text-purple-400">Juggling</li>
                        <li className="text-pink-500">Cooking</li>
                        <li className="text-rose-500">Crafting</li>
                        <li>Drawing</li>
                        <li>Music</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white text-4xl">
                        It is ok to just write things. That is what will help me
                        fill out what this is a going to be
                    </h3>
                    <p>That looks a lot more like a sentence than a title</p>
                    <p>
                        It would be cool to learn more tailwinds. Especially,
                        when it comes to the transformations and stuff. I would
                        also like to understand how the background and gradient
                        system work. I can just keep adding to this page. It
                        doesn't have to really be anything except a hub for
                        navigation. I want to know how to idiomatically style a
                        word in the middle of a p tag. I guess I don't really
                        understand the concept of a span. That might be
                        something for me to ask AI.
                    </p>
                    <p>
                        It might be good to make a list of things that I want to
                        ask. Or I could just ask it
                    </p>
                </div>
                <div>
                    <h2>Tests for myself</h2>
                    <ul>
                        <li>Make a button that does something</li>
                        <li>Make a card component</li>
                    </ul>
                    <p>
                        No one is going to see this. And that is ok. Just the
                        fact that you have stepped into the ring is what counts.
                        It is just a little iteration of the thing.
                    </p>
                    {/* This is almost like the start of a component */}
                    <div>
                        <h2 className="pt-20">Cool little things to build</h2>
                        <ul>
                            <li>A hanafuda card component</li>
                            <li>A task list</li>
                            <li>
                                Something to help get the kids out the door in
                                the morning.
                            </li>
                            <li>Bird song bingo or memory game</li>
                        </ul>
                    </div>
                    {/* This is like the end of the component */}
                </div>
                <div className="bg-emerald-400">
                    <h2 className="text-5xl">My Favorite Music</h2>
                    <div className="bg-red-200 flex">
                        <h2>A thought</h2>
                        <p>This is the best thing ever</p>
                    </div>
                    <p className="text-3xl">
                        I really like music. I listen to a lot of music. I
                        listen to a lot of different kinds of music. I listen to
                        a lot of different kinds of music from a lot of
                        different kinds of people.
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
                                A simple card game. It is a work in progress. I
                                am using this project to learn more about
                                TypeScript and React. I am also using this
                                project to learn more about Next.js. I am using
                                this project to learn more about Tailwind CSS. I
                                am using this project to learn more about how to
                                deploy a Next.js app. I am using this project to
                                learn more about how to deploy a Next.js app to
                                Vercel. I am using this project to learn more
                                about how to deploy a Next.js app to Vercel with
                                a custom domain. I am using this project to
                                learn more
                            </p>
                            <Link href="/projects/task-list">Task List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
