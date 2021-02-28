import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState("0");

    //getting value from input text
    const handleValue = ({target}) => {
        setSearchTerm(target.value);
    };

    //submitting typed value and getting data from API
    const handleSubmit = async () => {
        setLoading(true);
        try {
            await axios.get(`http://universities.hipolabs.com/search?country=${searchTerm}`)
                .then((res) => {
                        setList(res.data);
                        setLoading(false);
                    }
                );
        } catch (e) {
            console.log(e);
        }
    };

    //counting checked checkboxes
    const countChecks = () => {
        setChecked(document.querySelectorAll('input[type="checkbox"]:checked').length);
    }

    //reseting all data to default
    const reset = () => {
        setList([]);
        setSearchTerm("");
        setLoading(false);
        setChecked('0');
    };

    //show this message if no country typed
    const noDataSearched = () => {
        return (
            <span className="no-data-searched">Type any country to get its universities</span>
        );
    };

    //loading animation while data comes to us
    const load = () => {
        return (
            <p className="print-text">LOADING
                <span className="first-dot">.</span>
                <span className="second-dot">.</span>
                <span className="third-dot">.</span>
            </p>
        );
    };

    const renderData = () => {
        return list.map((item, index) => {
            const {country, name, alpha_two_code, web_pages, domains} = item;
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{country}</td>
                    <td>{name}</td>
                    <td>{alpha_two_code}</td>
                    <td><a target="_blank" href={web_pages}>{web_pages}</a></td>
                    <td>{domains}</td>
                    <td><input className="check" type="checkbox" onClick={countChecks}/></td>
                </tr>
            )
        })
    }


    return (
        <>{loading && load()}
            {!list.length ? noDataSearched() : null}
            <div className="App">
                <input type="text" className="search" value={searchTerm} onChange={handleValue}
                       placeholder="Type Some Country Here"/>
                <button type="submit" disabled={!searchTerm} onClick={handleSubmit}>Search</button>
                <button type="button" className="reset-btn" onClick={reset}>Reset All</button>
            </div>
            <hr/>
            <p className="checked" style={{display: !list.length ? 'none' : 'block'}}>Checked
                Items: {checked}</p>
            <table style={{display: !list.length ? 'none' : 'table'}}>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Country</th>
                    <th>University</th>
                    <th>Alpha Code</th>
                    <th>Web-Page</th>
                    <th>Domain</th>
                    <th>Checked</th>
                </tr>
                </thead>
                <tbody>{renderData()}</tbody>
            < /table>
        </>);
}

export default App;
