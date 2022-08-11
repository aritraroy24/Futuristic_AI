import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Testimonials, Contacts, Projects } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} | Homepage</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Projects />
            <Testimonials />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
