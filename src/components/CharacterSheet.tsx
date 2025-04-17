export default function CharacterSheet(props: any) {
    return (
        <div className="bg-gradient-to-r from-green-500 to-blue-800 border-4 m-30 p-4">
            <h2>Character Name</h2>
            <span className="text-5xl">{props.name}</span>
            <h2>CLASS & LEVEL</h2>
            <span className="text-3xl">
                Level {props.level} {props.class}
            </span>
            <h2>BACKGROUND</h2>
            {props.background}
            <h2>PLAYER NAME</h2>
            {props.playerName}
            <h2>RACE</h2>
            {props.race}

            <h2>ALIGNMENT</h2>
            {props.alignment}
            <h2>EXPERIENCE POINTS</h2>
            {props.experiencePoints}
            <h2>STRENGTH</h2>
            {props.strength}
        </div>
    )
}
