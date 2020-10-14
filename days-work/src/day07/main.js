import React from 'react'
import TechList from './techs'
import Footer from './footer'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const data = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
                firstName: 'Asabeneh',
                lastName: 'Yetayeh',
            },
            date: 'Oct 7, 2020',
        }
        const techs = ['HTML', 'CSS', 'JavaScript']
        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{data.welcome}</h1>
                    <h2>{data.title}</h2>
                    <h3>{data.subtitle}</h3>
                    <p>{data.author.firstName} {data.author.lastName}</p>
                    <small>{data.date}</small>
                </div>
                <TechList techs={techs} />
                <Footer />
            </header>
        )
    }
}

export default Header