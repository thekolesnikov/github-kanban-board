import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    issues: [],
    repo: [],
};

export const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        loadIssues(state, action) {
            state.issues = [...action.payload];
        },
        loadRepoInfo(state, action) {
            state.repo = action.payload;
        },
    },
});

export default issuesSlice.reducer;
