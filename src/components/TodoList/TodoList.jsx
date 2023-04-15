import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
    const issues = useSelector((state) => state.issues.issues);
    const repoInfo = useSelector((state) => state.issues.repo);

    return (
        <div className="todolist">
            {repoInfo.error && <span className="error">Invalid URL</span>}
            <div className="todolist__column">
                {repoInfo.id && (
                    <>
                        <div className="todolist__title">ToDo</div>
                        <div className="todolist__todos">
                            {issues.length ? (
                                issues.map((issue) => {
                                    return (
                                        <TodoItem
                                            id={issue.id}
                                            title={issue.title}
                                            number={issue.number}
                                            login={issue.user.login}
                                            comments={issue.comments}
                                            created={issue.created_at}
                                        />
                                    );
                                })
                            ) : (
                                <span>No todo</span>
                            )}
                        </div>
                    </>
                )}
            </div>
            <div className="todolist__column">
                {repoInfo.id && (
                    <>
                        <div className="todolist__title">In Progress</div>
                        <div className="todolist__todos">
                            {issues.length ? (
                                issues.map((issue) => {
                                    if (issue.state === 'open') {
                                        return (
                                            <TodoItem
                                                id={issue.id}
                                                title={issue.title}
                                                number={issue.number}
                                                login={issue.user.login}
                                                comments={issue.comments}
                                                created={issue.created_at}
                                            />
                                        );
                                    }
                                })
                            ) : (
                                <span>No todo</span>
                            )}
                        </div>
                    </>
                )}
            </div>
            <div className="todolist__column">
                {repoInfo.id && (
                    <>
                        <div className="todolist__title">Done</div>
                        <div className="todolist__todos">
                            {issues.length ? (
                                issues.map((issue) => {
                                    if (issue.state === 'closed') {
                                        return (
                                            <TodoItem
                                                id={issue.id}
                                                title={issue.title}
                                                number={issue.number}
                                                login={issue.user.login}
                                                comments={issue.comments}
                                                created={issue.created_at}
                                            />
                                        );
                                    }
                                })
                            ) : (
                                <span>No todo</span>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default TodoList;
