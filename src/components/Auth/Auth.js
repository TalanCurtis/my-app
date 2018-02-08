import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () =>(
    <div className="Auth">
        <h1>Auth comp</h1>
        <a href='http://localhost:3004/auth'><button type='' className='LoginButton'>login</button></a>
        <Link to='/Dashboard'>Link to Dash</Link>
    </div>
)

export default Auth