'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const generateDeck = () => {
    const memoryCards = [
        'dog.webp',
        'owl.jpg',
        'dragon.jpg',
        'elf.webp',
        'dwarf.webp',
        'elf.webp',
        'orc-connector.webp',
        'orcishcity.webp',
    ]
    const deck = [...memoryCards, ...memoryCards]
    return deck.sort(() => Math.random() - 0.5)
}
export default function MemoryGame() {
    const [cards, setCards] = useState<string[]>(generateDeck())
    return (
        <div className="grid grid-cols-4 gap-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="w-24 h-32 bg-gray-700 flex items-center justify-center text-white text-2xl font-bold rounded-lg"
                >
                    <Image
                        src={`/images/memory-game/${card}`}
                        width={250}
                        height={250}
                        alt=""
                    ></Image>
                </div>
            ))}
            <h1 className="text-3xl font-bold">Memory Game</h1>
            <p className="text-lg">
                The Memory Game is a classic card-matching game. The objective
                is to find pairs of matching cards by flipping them over two at
                a time. It tests your memory and concentration skills.
            </p>
        </div>
    )
}
