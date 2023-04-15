import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
    const [boards, setBoards] = useState([
        { name: 'All Todo', items: [] },
        { name: 'In Progress', items: [] },
        { name: 'Done', items: [] },
    ]);

    const repoInfo = useSelector((state) => state.issues.repo);
    const allIssues = useSelector((state) => state.issues.issues);

    const inProgressIssues = allIssues.filter(
        (issue) => issue.state === 'open'
    );
    const doneIssues = allIssues.filter((issue) => issue.state === 'closed');

    useEffect(() => {
        setBoards([
            { name: 'All Todo', items: [...allIssues] },
            { name: 'In Progress', items: [...inProgressIssues] },
            { name: 'Done', items: [...doneIssues] },
        ]);
    }, [repoInfo]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    // Drag functions
    function dragOverHandlerEvent(e) {
        e.preventDefault();
    }

    function dragLeaveHandler(e) {}

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board);
        setCurrentItem(item);
    }

    function dragEndHandler(e) {}

    function dropHandler(e, board, item) {
        e.preventDefault();
        e.stopPropagation();
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, currentItem);
        setBoards(
            boards.map((b) => {
                if (b.name === board.name) {
                    return board;
                }
                if (b.name === currentBoard.name) {
                    return currentBoard;
                }
                return b;
            })
        );
    }

    function dropCardHandler(e, board) {
        board.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        setBoards(
            boards.map((b) => {
                if (b.name === board.name) {
                    return board;
                }
                if (b.name === currentBoard.name) {
                    return currentBoard;
                }
                return b;
            })
        );
    }

    return (
        <div className="todolist">
            {repoInfo.error && <span className="error">Invalid URL</span>}
            {repoInfo.id &&
                boards.map((board) => {
                    return (
                        <div
                            key={board.name}
                            className="todolist__column"
                            onDragOver={(e) => dragOverHandlerEvent(e)}
                            onDrop={(e) => dropCardHandler(e, board)}
                        >
                            <div className="todolist__title">{board.name}</div>
                            <div className="todolist__todos">
                                {board.items.length ? (
                                    board.items.map((item) => {
                                        return (
                                            <TodoItem
                                                onDragOver={(e) =>
                                                    dragOverHandlerEvent(e)
                                                }
                                                onDragLeave={(e) =>
                                                    dragLeaveHandler(e)
                                                }
                                                onDragStart={(e) =>
                                                    dragStartHandler(
                                                        e,
                                                        board,
                                                        item
                                                    )
                                                }
                                                onDragEnd={(e) =>
                                                    dragEndHandler(e)
                                                }
                                                onDrop={(e) =>
                                                    dropHandler(e, board, item)
                                                }
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                number={item.number}
                                                login={item.user.login}
                                                comments={item.comments}
                                                created={item.created_at}
                                            />
                                        );
                                    })
                                ) : (
                                    <span>No todo</span>
                                )}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default TodoList;
