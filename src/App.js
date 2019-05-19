import React, { Component } from 'react';
import './App.css';
import qiqi from './qiqi.png'
import iconurl from './icon/爱心.png'
import Main from './Main'

import TypeMachine from './TypeMachine'

class App extends Component {
    state={
        class:'bounceInLeft',
        showHome:true,
        showEnvelope:false,
        showText:false
    };

  render() {

        /*const texts = [
            [{ string: '第一行', color: 'red' }],
            [{ string: '第二行' }, { string: '同行换色', color: 'yellow' }]
          ]
        return (
          <TypeMachine texts={texts} speed={500} defaultColor='#BBB' />
        )*/

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
                      点击这里接收你的5.20礼物！
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

              <header className="background">
                {main()}
              </header>


          </div>
        );
  }
}

export default App;
