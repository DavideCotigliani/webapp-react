import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import GlobalContext from '../contexts/globalContext';
import { useContext } from 'react';
import Loader from '../components/Loader';

const DefaultLayout = () => {
    const { isLoading } = useContext(GlobalContext) //consumando il contesto
    return (
        <>
            <header>
                <Header />
            </header>
            <main className='container-fluid'>
                <Outlet />
            </main >
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout
