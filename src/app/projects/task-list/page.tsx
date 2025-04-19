'use client'
import { useState } from 'react'
import { closestCorners, DndContext } from '@dnd-kit/core'

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },
    ])

    return (
        <div className="bg-gray-900 text-white">
            <h1>My Tasks</h1>
            <ul>
                <li>Plan wedding</li>
                <li>Add AI to the planning process</li>
                <li>Document or make a system for general planning</li>
            </ul>
        </div>
    )
}
