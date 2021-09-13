import React, { Component } from 'react'
import Country from './country/Country'
import Page1 from './Page1'
import Page2 from './page2/Page2'
class Home extends Component {
    render() {
        return (
            <div>
                <Page1/>
                <Page2/>
                <Country/>
            </div>
        )
    }
}

export default Home
