import React from 'react';
import HomeInfo from '../HomeInfo/HomeInfo';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <section>
            <div className="row w-100">
                <div className="col-md-2 pe-0">
                    <Sidebar />
                </div>
                <div className="col-md-10 ps-0">
                    <HomeInfo />
                </div>
            </div>
        </section>
    );
};

export default Home;