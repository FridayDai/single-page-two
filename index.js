import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Component = () => {
    const [data, setData] = useState(0);
    return (
        <div>
            <div>single-page-two</div>
            <div>{data}</div>
            <div>
                <button onClick={() => setData(data + 1)}>click me to add</button>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Route path='/'>
                <Component />
            </Route>
        </Router>
    );
};

const dom = document.querySelector('#app');
ReactDOM.render(<App/>, dom);
