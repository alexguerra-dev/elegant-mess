'use client'
import { useState } from 'react'
import { closestCorners, DndContext } from '@dnd-kit/core'

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, item: 'Make Todo List', status: 'done' },
        { id: 2, item: 'Document things', status: 'in progress' },
        {
            id: 3,
            item: 'Make a way to persist todos and stuff',
            status: 'in progress',
        },
        { id: 4, item: 'Add status to task list', status: 'done' },
    ])

    return (
        <div className="bg-gray-900 text-white">
            <h1>My Tasks</h1>
            <ul>
                <li>Plan wedding</li>
                <li>Add AI to the planning process</li>
                <li>Document or make a system for general planning</li>
            </ul>

            {tasks.map((task) => {
                return (
                    <div key={task.id} className="bg-gray-800 p-4 m-2 rounded">
                        {task.item} the task is {task.status}
                    </div>
                )
            })}
        </div>
    )
}
