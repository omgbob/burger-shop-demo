// src/routes.ts

// pages
import Home from './pages/Home'

import { IRoute } from './types/interfaces'

export const routes: Array<IRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    // {
    //     key: 'about-route',
    //     title: 'About',
    //     path: '/about',
    //     enabled: true,
    //     component: About
    // }
]