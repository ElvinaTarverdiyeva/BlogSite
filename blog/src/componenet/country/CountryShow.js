import React from 'react';

const CountryShow = (props) => {

        return (
        <div className="countryitem">
                            <div className="div1"></div>
                            <div className="divIn">
                            <img src={props.img} alt="" />
                            <h6>{props.time}</h6>
                            <h3>{props.title}</h3>
                            <p>{props.autortext}</p>
                            <h4> {props.autor}</h4>
                     
                            <button>Read More</button></div>
                            <div className="div2"></div>
                        </div>
        )
    }


export default CountryShow
