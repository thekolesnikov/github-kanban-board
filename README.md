# github-kanban-board

1. User should enter repo URL in the input on top of the page and press "Load". For example: https://github.com/facebook/react.
2. App loads issues for the repo using Github API.
3. App contains 3 columns:
ToDo (all new issues)
In Progress (opened issues with assignee)
Done (closed issues)
4. User should be able to drag-n-drop between the columns and change the order of issues.
5. Current issue position (column and order) should be stored between search and browser sessions. When the user loads issues for Repo1 -> Repo2 -> Repo1 he should see all changes he did for Repo1.
6. User should be able to visit the profile of the owner of the repo and visit the repo as well by links under the input.
