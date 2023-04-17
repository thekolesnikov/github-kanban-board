import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { issuesSlice } from '../../redux/slices/issuesSlice';
import { changeUrlIssues, changeUrlAbout } from '../../utils/changeURL';

function Input() {
    const dispatch = useDispatch();
    const { loadIssues, loadRepoInfo } = issuesSlice.actions;

    const [input, setInput] = useState('');

    async function loadFromApi(e) {
        e.preventDefault();
        try {
            const urlIssues = changeUrlIssues(input);
            const urlCommon = changeUrlAbout(input);

            const res = await Promise.all([fetch(urlIssues), fetch(urlCommon)]);
            const data = await Promise.all(res.map((r) => r.json()));

            //Если данные о данном репозитории уже есть в sessionStorage, то мы будем брать их из sessionStorage
            if (sessionStorage.getItem(data[1].html_url)) {
                dispatch(
                    loadIssues(
                        JSON.parse(sessionStorage.getItem(data[1].html_url))
                    )
                );
            } else {
                dispatch(loadIssues(data[0]));
            }
            dispatch(loadRepoInfo(data[1]));
            setInput('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="todo__form" onSubmit={(e) => loadFromApi(e)}>
            <input
                className="todo__input"
                value={input}
                type="text"
                placeholder="Enter repo url"
                onChange={(e) => setInput(e.target.value)}
            ></input>
            <button className="todo__button">Load issues</button>
        </form>
    );
}

export default Input;
