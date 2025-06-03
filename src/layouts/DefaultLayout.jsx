import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const DefaultLayout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className='container-fluid'>
                <Outlet />
            </main >
        </>
    )
}

export default DefaultLayout
