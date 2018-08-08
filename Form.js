import React, {Component} from 'react';
import './App.css';
import './poppin';

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
    onlickpopipa(){

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
                <button className={"popipa"} onClick={this.send.bind(this)} >Poppin'Party</button>
                <button className={"roselia"} onClick={this.send.bind(this)} >Roselia</button>
                <button className={"pasupare"} onClick={this.send.bind(this)} >Pastel Palette</button>
                <button className={"afuro"} onClick={this.send.bind(this)} >After glow</button>
                <button className={"harohapi"} onClick={this.send.bind(this)} >ハロー、ハッピーワールド！</button>
            </div>
        );
    }

}

