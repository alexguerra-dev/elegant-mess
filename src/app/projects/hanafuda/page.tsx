'use client'

import { DndContext } from '@dnd-kit/core'
import LandingSpot from '@/components/LandingSpot'
import HanafudaCard from '@/components/HanafudaCard'
import CardHand from '@/components/CardHand'

export default function Hanafuda() {
    return (
        <DndContext>
            <LandingSpot></LandingSpot>
            <CardHand></CardHand>
        </DndContext>
    )
}
