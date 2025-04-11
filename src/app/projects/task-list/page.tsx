export default function TaskList() {
    return (
        <div className="bg-gray-900 text-white">
            <h1 className="text-3xl font-bold">Task List</h1>
            <p className="text-lg">
                Here is a list of tasks I need to complete. I will add more
                details about each task soon.
            </p>
            <ul className="list-disc pl-5">
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
        </div>
    )
}
