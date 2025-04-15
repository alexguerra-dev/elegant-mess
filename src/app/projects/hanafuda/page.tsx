'use client'

import { DndContext } from '@dnd-kit/core'
import LandingSpot from '@/components/LandingSpot'
import HanafudaCard from '@/components/HanafudaCard'

export default function Hanafuda() {
    return (
        <DndContext>
            <div className="flex">
                <HanafudaCard month="january"></HanafudaCard>
                <HanafudaCard month="feb"></HanafudaCard>
            </div>
            <LandingSpot className=""></LandingSpot>
        </DndContext>
    )
}
