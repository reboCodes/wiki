import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Welcome to my wiki page!</h1>
            <p>Here are some articles:</p>
            <ul>
                <li>
                    <Link to="/react-esbuild-guide">React Esbuild Guide</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;