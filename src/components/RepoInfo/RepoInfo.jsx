import { useSelector } from 'react-redux';

function RepoInfo() {
    const repoInfo = useSelector((state) => state.issues.repo);

    return (
        <>
            {repoInfo.id > 0 && (
                <div className="repo">
                    <a
                        href={repoInfo.owner.html_url}
                        target="_blank"
                        className="repo__link"
                    >
                        {repoInfo.owner.login}
                    </a>
                    <a
                        href={repoInfo.clone_url}
                        target="_blank"
                        className="repo__link"
                    >
                        {repoInfo.name}
                    </a>
                    <span>
                        {Math.round(repoInfo.stargazers_count / 1000)} K stars
                    </span>
                </div>
            )}
        </>
    );
}

export default RepoInfo;
