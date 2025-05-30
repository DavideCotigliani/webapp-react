import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>
            <header>

            </header>
            <main className='container'>
                <Outlet />
            </main >
        </>
    )
}

export default DefaultLayout
