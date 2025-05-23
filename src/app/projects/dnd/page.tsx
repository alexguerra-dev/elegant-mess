import Link from 'next/link'
import CharacterSheet from '@/components/CharacterSheet'

export default function DndPage() {
    return (
        <div>
            <p className="text-4xl">Dungeons and Dragons is a nerd game.</p>

            <h2>Characters</h2>

            <p>
                Here are some of the characters I have played in Dungeons and
                Dragons.
            </p>
            <ul>
                <li>
                    <Link href="/projects/dnd/characters/flix">Flix</Link>
                </li>
                <li>
                    <Link href="/projects/dnd/characters/jade">Jade</Link>
                </li>
                <li>
                    <Link href="/projects/dnd/characters/arin">Arin</Link>
                </li>
            </ul>
            <h2>Campaigns</h2>
            <p>
                Here are some of the campaigns I have played in Dungeons and
                Dragons.
            </p>
            <ul>
                <li>Campaign 1</li>
                <li>Campaign 2</li>
                <li>Campaign 3</li>
            </ul>
            <h2>Resources</h2>
            <p>
                Here are some of the resources I have used in Dungeons and
                Dragons.
            </p>
            <ul>
                <li>Resource 1</li>
                <li>Resource 2</li>
                <li>Resource 3</li>
            </ul>
            <h2>Tools</h2>
            <p>
                Here are some of the tools I have used in Dungeons and Dragons.
            </p>
            <ul>
                <li>Tool 1</li>
                <li>Tool 2</li>
                <li>Tool 3</li>
            </ul>
            <h2>Tips</h2>
            <p>
                Here are some of the tips I have learned in Dungeons and
                Dragons.
            </p>
            <ul>
                <li>Tip 1</li>
                <li>Tip 2</li>
                <li>Tip 3</li>
            </ul>
            <h2>Tricks</h2>
            <p>
                Here are some of the tricks I have learned in Dungeons and
                Dragons.
            </p>
            <ul>
                <li>Trick 1</li>
                <li>Trick 2</li>
                <li>Trick 3</li>
            </ul>
            <h2>Strategies</h2>
            <p>
                Here are some of the strategies I have learned in Dungeons and
                Dragons.
            </p>
            <ul>
                <li>Strategy 1</li>
                <li>Strategy 2</li>
                <li>Strategy 3</li>
            </ul>
        </div>
    )
}
