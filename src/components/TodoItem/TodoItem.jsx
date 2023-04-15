import { timeAgo } from '../../utils/timeAgo.js';

function TodoItem({ id, title, number, login, comments, created }) {
    const date = timeAgo(created);
    return (
        <div key={id} className="todoitem" draggable="true">
            <div>{title}</div>
            <div className="todoiten__flex">
                <p>#{number}</p>
                <p>{date}</p>
            </div>
            <div className="todoiten__flex">
                <p>{login}</p>
                <span>|</span>
                <p>Comments: {comments}</p>
            </div>
        </div>
    );
}

export default TodoItem;
