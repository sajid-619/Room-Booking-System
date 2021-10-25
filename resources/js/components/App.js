import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/Menu';
import Home from '../components/Home';
import Login from '../components/Login';
import Registration from '../components/Registration';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}