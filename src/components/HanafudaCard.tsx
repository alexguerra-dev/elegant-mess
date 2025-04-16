import Image from 'next/image'
import { Hanafuda } from './Hanafuda'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
interface HanafudaCardProps {
    // Define the expected properties here, e.g., title?: string;
    month: string
    size?: string
    children?: React.ReactNode
}

const imageStyle = {
    width: 'auto',
    height: '100%',
    maxWidth: '512px',
    maxHeight: '839px',
}

export default function HanafudaCard(props: HanafudaCardProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.month,
        data: { type: 'card' },
    })
    const style = {
        transform: CSS.Translate.toString(transform),
        transition: 'transform 0.1s ease',
    }
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="w-56 m-4 p-4 bg-black rounded-2xl hover:rotate-3xl hover:scale-105 transition-transform duration-300 ease-in-out"
        >
            <Image
                src={`/images/hanafuda/${props.month}-1.svg`}
                height="839"
                width="512"
                alt="Hanafuda card"
                style={imageStyle}
            ></Image>
            {props.children}
        </div>
    )
}
