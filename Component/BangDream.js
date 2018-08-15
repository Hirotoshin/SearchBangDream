import React, {Component} from 'react';
import '../App.css';
import {Poppin, PoppinParty} from "./MemberOfPoppinParty";
import {Roselia} from "./MemberOfRoselia";
import {PastelPalettes, pasupare} from "./MemberOfPastelPalettes";
import {Afterglow, afuro} from "./MemberOfAfterglow";
import {HallowHappyWorld, harohapi} from "./MemberOfHelloHappyWorld";


export class BangDream extends Component{
    constructor(props){
        super(props);

        this.state ={
          value:'',
          message:'',
          showlist:[
              false,
              false,
              false,
              false,
              false
          ]
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
    ButtonClick(n){
        this.setState((prevState,currentProp)=>{
            const copyshowList = prevState.showlist.slice();
            copyshowList[n] = !copyshowList[n];

            return{
                showlist:copyshowList
            }
        });

    }

    render(){

        return(
            <div>
                <h1 className={"colorstyle"} >Bang Dream</h1>
                <input className={"textsize"} type="text" value={this.state.value} onChange={this.handleInput.bind(this)} />
                <button className={"buttonsize"} onClick={this.send.bind(this)} >SEND</button>
                <button className={"popipa"} onClick={this.ButtonClick.bind(this,0)} >Poppin'Party</button>
                {this.state.showlist[0]?<PoppinParty />:null}
                <button className={"roselia"} onClick={this.ButtonClick.bind(this,1)} >Roselia</button>
                {this.state.showlist[1]?<Roselia />:null}
                <button className={"pasupare"} onClick={this.ButtonClick.bind(this,2)} >Pastel Palette</button>
                {this.state.showlist[2]?<PastelPalettes />:null}
                <button className={"afuro"} onClick={this.ButtonClick.bind(this,3)} >After glow</button>
                {this.state.showlist[3]?<Afterglow />:null}
                <button className={"harohapi"} onClick={this.ButtonClick.bind(this,4)} >ハロー、ハッピーワールド！</button>
                {this.state.showlist[4]?<HallowHappyWorld />:null}
            </div>
        );
    }

}

