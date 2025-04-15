import Image from 'next/image'
import { Hanafuda } from './Hanafuda'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
interface HanafudaCardProps {
    // Define the expected properties here, e.g., title?: string;
    month: string
    children?: React.ReactNode
}

const imageStyle = {
    width: 'auto%',
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
        transition: 'transform 0.3s ease',
    }
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="w-36  bg-gray-900"
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
