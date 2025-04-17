'use client'

import Image from 'next/image'

import { DndContext } from '@dnd-kit/core'
import LandingSpot from '@/components/LandingSpot'
import CardHand from '@/components/CardHand'

export default function Hanafuda() {
    return (
        <DndContext>
            <div>
                <h2>This is the opponents side</h2>
                <div>Put image points cards</div>
            </div>
            <LandingSpot></LandingSpot>
            <div>
                <h2>This is your side</h2>
                <Image
                    src="/images/avatars/person.png"
                    alt="A picture of me when I do something good."
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-emerald-500 shadow-2xl"
                ></Image>
                <div>Put image points cards</div>
                <CardHand></CardHand>
            </div>
        </DndContext>
    )
}
