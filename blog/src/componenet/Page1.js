import React, { Component } from 'react'
import img2 from '../img/img2.jpg'


class Page1 extends Component {
    render() {
        return (
            <div className="container">
                <div className="page1">
            <div className="row">
                <div className="col-md-6 page1img">
                    <div className="imgdiv"></div>
                    <h5>Featured</h5>
                </div>
                <div className="col-md-6 page1text">
                    <h1>If you dream and you believe, <br /> you can do it</h1>
                    <p>Et harum quidem rerum facilis est et expedita distinctio. Ut proverbia non nulla veriora sint quam vestra dogmata. Si sapiens, ne tum quidem miser, cum ab Oroete, praetore Darei, in crucem actus est. Tum ille timide vel potius verecunde: Facio, inquit. Quae similitudo in genere etiam humano apparet. Quo plebiscito decreta a senatu est consuli [...]</p>
                    <button>Read more</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Page1
