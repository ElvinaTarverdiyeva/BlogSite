import React, { Component } from 'react'
import img1 from '../../img/img7.jpg'
import img2 from '../../img/img8.jpg'
import img3 from '../../img/img9.jpg'
import Imgdiv from './Imgdiv'
class Page2 extends Component {
    render() {
        return (
            <div className="page2 "> 
            <h1>Articles</h1>
            <div className="imgdivs container">
            <div className="img1div">
                <Imgdiv img={img1} h5text="When you are on your way to home" ptext="Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]" />
            </div> 
            <div className="img2div">
            <Imgdiv img={img2} h5text="You have to fight to reach your dream" ptext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne potest esse dies saepius, qui semel fuit? Sed tamen intellego quid velit. Respondent extrema primis, media [...]" />
            </div>
            <div className="img3div">
            <Imgdiv img={img3} h5text="The sky, the sky beyond the door is blue" ptext="Quod totum contra est. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita [...]" />
            </div>
            </div>
            
            </div>
        )
    }
}

export default Page2
