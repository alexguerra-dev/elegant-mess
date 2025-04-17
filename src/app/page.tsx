import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex">
            <div className="flex flex-col border-4 p-4 m-4 rounded-3xl shadow-2xl bg-amber-300">
                <h2 className="text-5xl">Alex</h2>
                <Image
                    src="/images/avatars/person.png"
                    alt="A picture of me"
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-emerald-500 shadow-2xl"
                />
                <p>This is where some bio text will go.</p>
            </div>

            <div>
                <h2 className="text-5xl border-amber-500 border-8 pr-6 mr-8">
                    My Projects
                </h2>
                <ul>
                    <li>
                        <p className="text-3xl">
                            <Link href="/pile">Pile</Link>
                        </p>
                        <p>
                            <Link href="/projects/dnd">Dnd</Link>
                        </p>

                        <Link href="/projects/task-list">Task List</Link>
                    </li>
                </ul>
            </div>

            <div>
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
                <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    This is gradient text
                </span>
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
            <div className="flex flex-col justify-center items-center">
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

                            <Link href="/projects/task-list">Task List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
