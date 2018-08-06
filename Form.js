import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export class Form extends Component{

    render(){
        var colorstyle = {
            color :"red",
            backgroundColor:"black",
            padding:"40px 580px"
        };

        var textsize = {
            width:"300px",
            height:"100px"
        }

        var buttonsize = {
            width:"100px",
            height:"100px"
        }
        return(
            <div>
                <h1 style={colorstyle}>Bang Dream</h1>
                <input type="text" style={textsize}/>
                <button style={buttonsize}>test</button>
            </div>
        );
    }

}

