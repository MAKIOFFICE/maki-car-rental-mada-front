import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import About from '../views/Voiture/About.vue'
import Faq from '../views/Faq/Faq.vue'
import Cvg from '../views/Cvg/Cvg.vue'
import Contact from '../views/Contact/Contact.vue'
import Message from '../views/details/Message/Message.vue'
import Reserve from '../views/details/Reserve/Reserve.vue'
import Franchise from '../views/details/Franchise/Franchise.vue'

import Animate from '../views/Contact/animate.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq
    },
    {
        path: '/cvg',
        name: 'Cvg',
        component: Cvg
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/message',
        name: 'Message',
        component: Message
    },
    {
        path: '/reserve',
        name: 'Reserve',
        component: Reserve
    },
    {
        path: '/franchise',
        name: 'Franchise',
        component: Franchise
    },
    {
        path: '/animate',
        name: 'Animate',
        component: Animate
    }
]

const router = createRouter({
    history: createWebHistory(''),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router