import { timeAgo } from '../../utils/timeAgo.js';

function TodoItem({
    title,
    number,
    login,
    comments,
    created,
    onDragOver,
    onDragLeave,
    onDragStart,
    onDragEnd,
    onDrop,
}) {
    const date = timeAgo(created);
    return (
        <div
            className="todoitem"
            draggable="true"
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDrop={onDrop}
        >
            <div className="todoitem__el">{title}</div>
            <div className="todoitem__flex">
                <p className="todoitem__el">#{number}</p>
                <p className="todoitem__el">{date}</p>
            </div>
            <div className="todoitem__flex">
                <p className="todoitem__el">{login}</p>
                <span className="todoitem__el">|</span>
                <p className="todoitem__el">Comments: {comments}</p>
            </div>
        </div>
    );
}

export default TodoItem;
