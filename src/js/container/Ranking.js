import React, { Component } from 'react';
import Ranktext from './Ranktext';
class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local:[],
        };
        this.init=this.init.bind(this);
    }

    componentDidMount(){
      this.init()
      }
    init(){
        let getter= JSON.parse(localStorage.getItem('rank'))
        // console.log(getter,'local')
        if(getter){
        this.setState({
            local:getter
        })
        }
    }
//console有印出來，畫面沒有出來
    render() {
        return (
            <div className="rank">
            { this.state.local.length!==0?
            this.state.local.map(data=>{
                console.log(data);
                <Ranktext
                    name={data.name}
                    step={data.step}
                />
               })
               :'沒有資料'}
            印在console
            </div>
        );
    }
}
export default Ranking;
