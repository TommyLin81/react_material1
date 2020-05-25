import ReactDOM from 'react-dom'
import React, { Component } from 'react'

//1 area
class Example extends Component {
    constructor(props){
        super(props)
        this.state ={
            test:0
        }
    }
    render() {
        // this.props.msg2 = "Hellow 123!"
        let string
        return (
            <div>
                <h2>Hello React! {this.props.msg} {this.props.msg2}</h2>
                ======================
                <Example2 msg={this.props.msg}/>
                <Example2 msg={this.props.msg2}/>
                ======================
                <Example3/>
            </div>
        )
    }
}

//2 area
class Example2 extends Component {
    render() {
        return (
            <div>
                <h2>Example2 say : {this.props.msg}</h2>
            </div>
        )
    }
}

//3 area
class Example3 extends Component {
    constructor(props){
        super(props)
        this.state={
            number1:0
        }
        this.number2 = 0
    }
    addOneS=()=>{
        this.setState({
            number1:this.state.number1 + 1
        })
    }
    addOneN=()=>{
        this.number2 = this.number2 + 1
    }
    render() {
        return (
            <div>
                <h2>Show number1 : {this.state.number1}</h2>
                <h2>Show number2 : {this.number2}</h2>
                <button onClick={this.addOneS}>add number1</button>
                <button onClick={this.addOneN}>add number2</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Example msg={"Hello world!"} msg2="Hello Tommy!" />,
    document.getElementById('root')
)