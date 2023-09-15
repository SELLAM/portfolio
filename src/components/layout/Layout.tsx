import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import './layout.scss'
import Footer from './Footer'
import Info from '../about/Info'

export const Layout: React.FC<any> = () => {
    return (
        <div className='layout-wrapper'>
            <div className='layout container'>
                <div className='top-header'>
                    <img src='/logo.png' loading='lazy' />
                </div>
                <div className='info'>
                    <Info />
                </div>
                <div className='content-wrapper'>
                    <Outlet />
                    <Footer /> 
                </div>
                <Header />
            </div>
        </div>
    )
}

export default Layout
