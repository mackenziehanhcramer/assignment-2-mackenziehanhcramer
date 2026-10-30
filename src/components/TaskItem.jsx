// One task

function TaskItem({ description, toggle, DeleteButton }) {
    return (
        <div>
            <li>{description}</li>
            <li>{toggle}</li>
            <li>{DeleteButton}</li>
        </div>
    )
}

export default TaskItem