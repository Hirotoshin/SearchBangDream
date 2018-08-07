import React, {Component} from 'react';
import './App.css';

export class Form extends Component{
    constructor(props){
        super(props);

        this.state ={
          value:'',
          message:''
        };
    }

    handleInput({target:{value}}){
        console.log("handle push");
        this.setState({
            value
        });
}
    send(){
        console.log("send push");
        const {value} = this.state;
        this.setState({
            value:'',
            message:value
        });
    }

    render(){
        var colorstyle = {
            color :"red",
            backgroundColor:"black",
            padding:"40px 780px"
        };

        var textsize = {
            position:"absolute",
            right:"90px",
            top:"60px",
            width:"200px",
            height:"50px"
        }

        var buttonsize = {
            position:"absolute",
            right:"40px",
            top:"60px",
            width:"50px",
            height:"50px"

        }
        return(
            <div>
                <h1 style={colorstyle}>Bang Dream</h1>
                <input type="text" value={this.state.value} onChange={this.handleInput.bind(this)} style={textsize}/>
                <button onClick={this.send.bind(this)} style={buttonsize}>SEND</button>
            </div>
        );
    }

}

