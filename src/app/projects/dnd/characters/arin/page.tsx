import CharacterSheet from '@/components/CharacterSheet'

export default function ArinPage() {
    const character = {
        name: 'Arin Lightfoot',
        class: 'Rogue',
        level: 3,
        race: 'Halfling',
        background: 'Criminal',
        attributes: {
            strength: 10,
            dexterity: 16,
            constitution: 14,
            intelligence: 12,
            wisdom: 8,
            charisma: 13,
        },
        skills: {
            acrobatics: 5,
            stealth: 7,
            perception: 3,
            deception: 4,
        },
        spells: {
            cantrips: ['Minor Illusion', 'Mage Hand'],
            firstLevel: ['Disguise Self', 'Silent Image'],
        },
        equipment: {
            weapons: ['Rapier', 'Dagger'],
            armor: ['Leather Armor'],
            tools: ["Thieves' Tools"],
            other: ["Burglar's Pack"],
        },
        backgroundDescription:
            'Arin grew up in the streets of Waterdeep, learning to survive by stealing and conning. He has a quick wit and a silver tongue, making him a master of deception. He is always looking for the next big score and is not afraid to take risks.',
        personalityTraits:
            'Arin is charming and witty, always ready with a joke or a clever remark. He has a knack for getting himself out of tight spots with his quick thinking.',
        ideals: 'Freedom: Arin believes in the freedom to do as he pleases, without the constraints of society. He values independence and self-reliance above all else.',
        bonds: 'Arin has a deep bond with his fellow thieves and con artists. He would do anything to protect them and their secrets.',
        flaws: 'Arin can be reckless and impulsive, often getting himself into trouble. He has a tendency to underestimate his opponents and overestimate his own abilities.',
    }

    return (
        <div>
            <CharacterSheet
                name={character.name}
                class={character.class}
                level={character.level}
            ></CharacterSheet>
        </div>
    )
}
