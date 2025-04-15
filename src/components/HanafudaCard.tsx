import Image from 'next/image'
import { Hanafuda } from './Hanafuda'
import { useDroppable } from '@dnd-kit/core'

interface HanafudaCardProps {
    // Define the expected properties here, e.g., title?: string;
    month: string
}

export default function HanafudaCard(props: HanafudaCardProps) {
    // const { isOver, setNodeRef } = useDroppable({
    //     id: props.month,
    //     data: { type: 'card' },
    // })
    // const { month } = props

    return (
        <div>
            <Image
                src="/images/hanafuda/january-1.svg"
                height="839"
                width="512"
                alt="Hanafuda card"
            ></Image>
        </div>
    )
}
