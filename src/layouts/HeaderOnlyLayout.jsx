import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const HeaderOnlyLayout = () => {
    return (
        <>
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
        </>
    );
};

export default HeaderOnlyLayout;
