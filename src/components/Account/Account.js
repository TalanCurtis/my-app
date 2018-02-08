import React from 'react';

let logedIn = false

const Account = ()=>(
    <div className='Account'>
        {logedIn?<p>Loged In</p>: <p>Not Loged In</p>}
    </div>
)

export default Account;