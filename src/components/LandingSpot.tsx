import { useDroppable } from '@dnd-kit/core'

export default function LandingSpot(props: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'landing-spot',
        data: { type: 'card' },
    })

    const style = {
        backgroundColor: isOver ? 'green' : 'red',
        transition: 'background-color 0.3s ease',
    }
    return (
        <div className="w-1/2 h-1/3 bg-red-500" ref={setNodeRef} style={style}>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <p className="text-2xl">This is a landing spot</p>
            <p className="text-2xl">Drag a card here</p>
            <p className="text-2xl">to see the magic happen</p>
            <p className="text-2xl">or not</p>
            <p className="text-2xl">or just say hi</p>
            {props.children}
        </div>
    )
}
