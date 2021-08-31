import React from 'react'
import { FaFeatherAlt } from 'react-icons/fa'

class FullStack extends React.Component{
    constructor(){
        super()
        this.state = {
            career: "Full Stack Web Developer",
            name: "Tommy",
            timeFrame: "December 2015 - present",
            first: "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
            second: "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
            third: "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
            fourth:""
        }
        this.baseState = this.state
        this.handleClick = this.handleClick.bind(this)
        this.secondClick = this.secondClick.bind(this)
        this.thirdClick = this.thirdClick.bind(this)
    }
   
    handleClick = () => {
        this.setState(this.baseState)
    }
    secondClick = () => {
         this.setState({career: "Front-End Engineer",
            name: "Bigdrop",
        timeFrame:"May 2015 - December 2015",
            first:"Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
            second:"Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
            third:"Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
            fourth:"Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"
        })
    }
   thirdClick = () => {
             this.setState({
            career: "Engineering Intern",
            name: "Cuker",
            timeFrame: "May 2014 - September 2015",
            first: "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
            second: "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
            third:"Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
            fourth: ""
        })
   }
    
        render() {
            return (
                <div id="content">
                    <div id="btns">
                <button onClick={this.handleClick}>Tommy</button>
        <button onClick={this.secondClick}>Bigdrop</button>
        <button onClick={this.thirdClick}>Cuker</button>
        </div>
        <div id="section">
                <h2>{this.state.career}</h2>
                <h3>{this.state.name}</h3>
                <h3>{this.state.timeFrame}</h3>
                <ul>
              <p><FaFeatherAlt className="feather" /><li>{this.state.first}</li></p>
               <p><FaFeatherAlt className="feather" /><li>{this.state.second}</li></p>
               <p><FaFeatherAlt className="feather" /><li>{this.state.third}</li></p>
               <p><FaFeatherAlt className="feather" /><li>{this.state.fourth}</li></p>
                </ul> 
                </div>               </div>            )        }
    }
    export default FullStack

