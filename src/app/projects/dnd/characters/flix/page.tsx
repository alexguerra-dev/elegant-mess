import CharacterSheet from '@/components/CharacterSheet'

export default function FlixPage() {
    const character = {
        name: 'Flix',
        description:
            'Flix is a small, blue dragonborn bard who loves to sing and dance. He is always the life of the party and loves to make people laugh.',
    }
    const stats = {
        strength: 10,
        dexterity: 14,
        constitution: 12,
        intelligence: 16,
        wisdom: 8,
        charisma: 18,
    }
    const skills = {
        acrobatics: 5,
        animalHandling: 2,
        arcana: 4,
        athletics: 1,
        deception: 6,
        history: 3,
        insight: 1,
        intimidation: 2,
        investigation: 4,
        medicine: 1,
        nature: 2,
        perception: 1,
        performance: 7,
        persuasion: 6,
        religion: 3,
        sleightOfHand: 5,
        stealth: 4,
    }
    const spells = {
        cantrips: ['Vicious Mockery', 'Dancing Lights'],
        firstLevel: ['Healing Word', 'Thunderwave'],
        secondLevel: ['Invisibility', 'Mirror Image'],
        thirdLevel: ['Fear', 'Hypnotic Pattern'],
    }
    const equipment = {
        weapons: ['Rapier', 'Dagger'],
        armor: ['Leather Armor'],
        tools: ['Lute', 'Flute'],
        other: ["Explorer's Pack", 'Bedroll'],
    }
    const background =
        'Flix grew up in a small village where he was always the center of attention. He loved to perform for his friends and family, and he quickly became known as the village bard. He left home to travel the world and share his music with others.'
    const personalityTraits =
        'Flix is always cheerful and loves to make people laugh. He is very outgoing and loves to meet new people.'
    const ideals =
        'Flix believes that music is the universal language and that it can bring people together. He wants to use his music to make the world a better place.'
    const bonds =
        'Flix has a deep bond with his lute, which was given to him by his grandmother. He also has a strong bond with his friends and will do anything to protect them.'
    const flaws =
        'Flix can be a bit too trusting and often gets himself into trouble because of it. He also has a tendency to get carried away with his performances and can be a bit over the top.'
    return (
        <div>
            <h1>Flix</h1>
            <CharacterSheet
                name="Flix"
                description="Flix is a small, blue dragonborn bard who loves to sing and dance. He is always the life of the party and loves to make people laugh."
                image="https://i.pinimg.com/originals/4c/0f/8b/4c0f8b1a2d3e5a7e5a7e5a7e5a7e5a7e.jpg"
                class="Bard"
                level={5}
                playerName="John Doe"
                stats={{
                    strength: 10,
                    dexterity: 14,
                    constitution: 12,
                    intelligence: 16,
                    wisdom: 8,
                    charisma: 18,
                }}
                skills={{
                    acrobatics: 5,
                    animalHandling: 2,
                    arcana: 4,
                    athletics: 1,
                    deception: 6,
                    history: 3,
                    insight: 1,
                    intimidation: 2,
                    investigation: 4,
                    medicine: 1,
                    nature: 2,
                    perception: 1,
                    performance: 7,
                    persuasion: 6,
                    religion: 3,
                    sleightOfHand: 5,
                    stealth: 4,
                }}
                spells={{
                    cantrips: ['Vicious Mockery', 'Dancing Lights'],
                    firstLevel: ['Healing Word', 'Thunderwave'],
                    secondLevel: ['Invisibility', 'Mirror Image'],
                    thirdLevel: ['Fear', 'Hypnotic Pattern'],
                }}
                equipment={{
                    weapons: ['Rapier', 'Dagger'],
                    armor: ['Leather Armor'],
                    tools: ['Lute', 'Flute'],
                    other: ["Explorer's Pack", 'Bedroll'],
                }}
                background="Flix grew up in a small village where he was always the center of attention. He loved to perform for his friends and family, and he quickly became known as the village bard. He left home to travel the world and share his music with others."
                personalityTraits="Flix is always cheerful and loves to make people laugh. He is very outgoing and loves to meet new people."
                ideals="Flix believes that music is the universal language and that it can bring people together. He wants to use his music to make the world a better place."
                bonds="Flix has a deep bond with his lute, which was given to him by his grandmother. He also has a strong bond with his friends and will do anything to protect them."
                flaws="Flix can be a bit too trusting and often gets himself into trouble because of it. He also has a tendency to get carried away with his performances and can be a bit over the top."
            ></CharacterSheet>
        </div>
    )
}
