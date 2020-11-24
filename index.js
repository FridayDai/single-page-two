import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [data, setData] = useState(0)
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
const dom = document.querySelector('#app');
ReactDOM.render(<App/>, dom);
