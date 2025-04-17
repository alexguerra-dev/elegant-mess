import React from 'react'
import HanafudaCard from './HanafudaCard'

export default function CardHand() {
    return (
        <div className="flex bg-gradient-to-r from-red-600 to-blue-600 mt-40 pl-40 ml-8 outline outline-offset-8 rounded-3xl">
            <HanafudaCard month="january"></HanafudaCard>
            <HanafudaCard month="february"></HanafudaCard>
            <HanafudaCard month="march"></HanafudaCard>
            <HanafudaCard month="april"></HanafudaCard>
            <HanafudaCard month="may"></HanafudaCard>
            <HanafudaCard month="june"></HanafudaCard>
            <HanafudaCard month="july"></HanafudaCard>
            <HanafudaCard month="august"></HanafudaCard>
            <HanafudaCard month="september"></HanafudaCard>
            <HanafudaCard month="october"></HanafudaCard>
            <HanafudaCard month="november"></HanafudaCard>
            <HanafudaCard month="december"></HanafudaCard>
        </div>
    )
}
