import React, { Component } from 'react';
import './App.css';
import qiqi from './qiqi.png'
import iconurl from './icon/爱心.png'
import Main from './Main'
class App extends Component {
    state={
        class:'bounceInLeft',
        showHome:true,
        showEnvelope:false,
        showText:false
    };

  render() {

        const main = ()=>{
            if (this.state.showText)
                return <Main/>
        }
        return (
          <div>
              { this.state.showHome && 
                <header className="App-header">
                  <div>
                    <img src={qiqi} className="App-logo" alt="logo" />
                    <p>
                      祝我最爱的琦琦坨5.20快乐！
                    </p>
                    <a
                      className="App-link"
                      onClick = {() => {this.setState({class:'bounceInLeft', showHome:false, showEnvelope:true, showText:false})}}
                    >
                      这是送给琦琦坨的5.20礼物！
                    </a>
                  </div>
                </header>
              }

              { this.state.showEnvelope &&
                <header className="App-header"> 
                  <div className={"envelope animated "+ this.state.class}>
                    <div className="triangle-down"></div>
                      <img className="heart" src={iconurl} onClick={()=>{
                          this.setState({class:'bounceOutRight', showHome:false, showEnvelope:false, showText:true})
                      }}/>
                      <div className="triangle-up"></div>
                  </div>
                </header>
              } 

              <header>
                {main()}
              </header>


          </div>
        );
  }
}

export default App;
