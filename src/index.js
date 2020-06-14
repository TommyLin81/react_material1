import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class Example1 extends Component{

    render(){
        const propties = this.props
        console.log(propties)
        return(
            <div>
                <h2>Hello React! {this.props.msg}</h2>
                ======================================
                <Example2 value={this.props.msg}/>
                <Example2 value={"part 2"}/>
                <Example2 value={"part 3"}/>
                ======================================
                <Example3 />
            </div>
        )
    }
}

class Example2 extends Component{

    render(){
        return(
            <div>
                <h2>Eaxmple2 say: {this.props.value}</h2>
            </div>
        )
    }
}

class Example3 extends Component{
    constructor(props){
        super(props)
        this.state ={
            number1:0
        }
    }

    addOne=()=>{
        this.setState({
            number1: this.state.number1 + 1
        })
    }

    render(){
        return(
            <div>
                <h2>Show number1 : {this.state.number1}</h2>
                <button onClick={this.addOne}>add </button>
            </div>
        )
    }
}



ReactDOM.render(
    <Example1 msg={"Hello world!!"}  />,
    document.getElementById('root')
)