import React, { Component } from 'react';
import Input from '../../../../react-todolist/src/js/components/Input';
import Row from './Row';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content:'',
          nameList:'',
          count:0,
          board: [1, 2, 3, 4, 5, 6, 7, 8, '空白'], 
          ghost:null,
          row:[],
          correct:[],
          check:false,
          local:null
          
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleRow=this.handleRow.bind(this);
        this.newInit=this.newInit.bind(this);
        this.changeRow=this.changeRow.bind(this);
        this.testCode=this.testCode.bind(this);
        this.correct=this.correct.bind(this);
    }
    componentDidMount(){
      this.testCode();
      this.correct();
     let getter= JSON.parse(localStorage.getItem('rank'))
     console.log(getter,'local')
     if(getter){
        this.setState({
          local:getter
        })
     }
    }

    newInit(){
      let rows = [];
      let ghost;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let style={
            left:i*100,
            top:j*100
          }
          number+=1;
          let ran = Math.floor(Math.random() * this.state.board.length);
          let center = this.state.board[ran];
          this.state.board[ran] = this.state.board[this.state.board.length - 1];
          this.state.board[this.state.board.length - 1] = center;
          this.state.board = this.state.board.slice(0, this.state.board.length - 1);
          console.log(this.state.board,'數字')
          console.log(center,'馬')
          if(center==='空白'){
          ghost=[i,j]
          console.log(ghost,'鬼')
          }
        rows.push( 
        <Row 
         key={center}
          number={center}
          x={i}
          y={j}
          style={style}
          onClick={this.handleRow}
        />)

        }
      }
     
      console.log(rows)
      this.setState({
        row:rows,
        ghost:ghost,
    });
    }
//測試碼
testCode(){
  let rows = [];
  let number=0;
  let ghost;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let style={
        left:i*100,
        top:j*100
      }
      number+=1;
    rows.push( 
    <Row 
     key={number}
      number={number}
      x={i}
      y={j}
      style={style}
      onClick={this.handleRow}
    />)

    }
  }
  ghost=[2,1]

  let styleSpace={
    left:200,
    top:100
  }
  rows[8]= <Row 
   key='空白'
   number='空白'
   x={2}
   y={1}
   style={styleSpace}
   onClick={this.handleRow}
 />

 let styleLast={
  left:200,
  top:200
}
 rows[7]= <Row 
  key='8'
  number={8}
  x={2}
  y={2}
  style={styleLast}
  onClick={this.handleRow}
/>
 
  console.log(rows)
  this.setState({
    row:rows,
    ghost:ghost,
});
}

//正確碼
correct(){
  let rows = [];
  let number=0;
  let ghost;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let style={
        left:i*100,
        top:j*100
      }
      number+=1;
    rows.push( 
    <Row 
     key={number}
      number={number}
      x={i}
      y={j}
      style={style}
      onClick={this.handleRow}
    />)

    }
  }
  let styleSpace={
    left:200,
    top:200
  }
  rows[8]= 
  <Row 
   key='空白'
   number='空白'
   x={2}
   y={2}
   style={styleSpace}
   onClick={this.handleRow}
 />
 this.setState({ 
  correct:rows,
});
  console.log(rows)
}

//開始動作
    handleChange(e){
        this.setState({
            content:e.target.value
        });
    }
    handleInput(e){
        if(e.key == 'Enter'&&e.target.value){
            let listRow=e.target.value

            this.setState({ 
                nameList:listRow,
            });
            console.log(this.state.nameList);
        }
    }
changeRow(who,ghostX,ghostY,space){
  let nowRow=this.state.row; 
  let ghost;
  nowRow.map((data,index)=>{
    if(data.props.number===who){

      let styleSpace={
        left:data.props.x*100,
        top:data.props.y*100
      }
      nowRow[space]= 
      <Row 
       key='空白'
       number='空白'
       x={data.props.x}
       y={data.props.y}
       style={styleSpace}
       onClick={this.handleRow}
     />

      let style={
        left:ghostX*100,
        top:ghostY*100
      }
      nowRow[index]= 
      <Row 
      key={who}
       number={who}
       x={ghostX}
       y={ghostY}
       style={style}
       onClick={this.handleRow}
     />
      ghost=[data.props.x,data.props.y]
      this.setState({ 
        row:nowRow,
        ghost:ghost
      });
    }
  })
 
  if(this.state.row[8].props.x===2&&this.state.row[8].props.y===2){
    let same=0;
      this.state.row.map((data,index)=>{
      console.log(this.state.correct[index].props)
      if(data.props.x===this.state.correct[index].props.x && data.props.y===this.state.correct[index].props.y){
        console.log('一樣')
        same+=1;
      }
      })
      if(same===9){
        this.setState({ 
        check:true
    });
console.log(this.state.count,'部署')
let count=this.state.count+1;
    let totle={
      name:this.state.nameList,step:count
    }
    let array=this.state.local
    console.log(array)
    array.push(totle)
    let body= JSON.stringify(array);
    localStorage.setItem('rank',body);
      }
  }
}

   handleRow(e){
    console.log(e.target.textContent,'按到誰')
    let who=parseInt(e.target.textContent);
    let x=parseInt(e.target.dataset.x);
    let y=parseInt(e.target.dataset.y)
    let ghostX=parseInt(this.state.ghost[0]);
    let ghostY=parseInt(this.state.ghost[1])
    let space;
    let nowRow=this.state.row; 
    console.log(this.state.ghost)
    this.setState({ 
       count:this.state.count+1
    });
    nowRow.map((data,index)=>{
        if(data.props.number==='空白'){
      space=index
    }
    })
      if(x===ghostX){
        console.log('x值相同')
        if(y>ghostY){
          if(y-ghostY===1){
            console.log('在隔壁')
            this.changeRow(who,ghostX,ghostY,space)
          }
        }else{
          if(ghostY-y===1){
            console.log('在隔壁')
            this.changeRow(who,ghostX,ghostY,space)
          }
        }
      }
      if(y===ghostY){
        console.log('y值相同')
        if(x>ghostX){
          if(x-ghostX===1){
            console.log('在隔壁')
            this.changeRow(who,ghostX,ghostY,space)
          }
        }else{
          if(ghostX-x===1){
            console.log('在隔壁')
            this.changeRow(who,ghostX,ghostY,space)
          }
        }
      }
   }
    render() {
    
        return (
            <div className='home'>
                <div className='container'>
                    <Input 
                        id='inputText'
                        value={this.state.content}
                        handleInput={this.handleInput}
                        handleChange={this.handleChange}
                        placeholder='請輸入'
                    />
                  <button className='button' onClick={this.handleInput}>開始遊戲</button>
                  <p>Step Count:{this.state.count}</p>
                  <div className={this.state.check?'main correct':'main'}> 
                  {this.state.row}                 
                  </div>
              
                </div>
            </div>
        );
    }
}
export default Home;
