import React, { Component } from 'react'
import CountryShow from './CountryShow'
import CountyrAbout from './CountyrAbout'
class Country extends Component {
    render() {
        return (
            <div>
                <div className="country container">
                    <h1>About countries</h1>
                    <h2>“Travel the world. The most amazing of all dreams you can ever have!”</h2>
                    <h3>-Ray Bradbury</h3>
                    <div className="aboutdiv">
                 
                    {CountyrAbout.productData.map((item, index) => {
                        return (
                            <CountryShow img={item.img}
                                title={item.title}
                                time={item.time}
                                title={item.title}
                                autortext={item.autortext}
                                autor={item.autor}
                                item={item}
                                key={index}
                            />
                        )
                    })}
             

                    </div>

                </div>
               
            </div>
        )
    }
}


export default Country
