import Link from 'next/link'

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <p>
                Here are some of the projects I have worked on. I will add more
                details about each project soon.
            </p>
            <ul>
                <li>
                    <Link href="/projects/dnd" className="text-3xl m-3 outline">
                        Dnd
                    </Link>
                </li>
                <li>
                    <Link href="/projects/hanafuda" className="text-3xl m-3">
                        Hanafuda
                    </Link>
                </li>
                <li>
                    <Link href="/projects/memory-game" className="text-3xl m-3">
                        Memory Game
                    </Link>
                </li>

                <li>
                    <Link
                        href="/projects/november-games"
                        className="text-3xl m-3"
                    >
                        November Games
                    </Link>
                </li>

                <li>
                    <Link href="/projects/task-list" className="text-3xl m-3">
                        Task List
                    </Link>
                </li>
            </ul>
        </div>
    )
}
