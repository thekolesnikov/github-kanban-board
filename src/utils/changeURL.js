export function changeUrlIssues(input) {
    const rest = input.replace('https://github.com/', '');
    return `https://api.github.com/repos/${rest}/issues?state=all&per_page=15`;
}

export function changeUrlAbout(input) {
    const rest = input.replace('https://github.com/', '');
    return `https://api.github.com/repos/${rest}`;
}
