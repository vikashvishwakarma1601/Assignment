import React from 'react';
import Login from '../UserAuth/Login';
import Theme from '../Theme/Theme';


const Home = ({history}) => {
    return (
        <>
            <Theme />
            <Login history={history} />
        </>
    );
}

export default Home;