import React, { Component } from 'react';
import ContextAPI from '../contextAPI/ContextAPI';
import Fragments from '../fragments/Fragments';
import RefsDom from '../refs-and-dom/RefsDom';
import RenderProps from '../renderProps/RenderProps';
import TypeChecking from '../typeChecking/TypeChecking';
import Twitter from './Twitter';
import './App.css';
import DumbComponents from '../dumbComponents/DumbComponents';
import SmartComponents from '../smartComponents/SmartComponents';

export default class App extends Component {

  state = {
    loading: false,
    activated: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      });
    }, 3000);
  }

  onRemove = () => {
    this.setState({
      activated: false
    })
  }

  render() {

    const tweets = [{
      name: '@johndoe',
      text: 'Hello World',
      date: '10/10/2018',
      avatar: 'https://pbs.twimg.com/profile_images/948459940590981376/JXs-cQyY_400x400.jpg'
    },
    {
      name: '@samdoe',
      text: 'Some other description',
      date: '20/01/2010',
      avatar: 'https://pbs.twimg.com/profile_images/948459940487561376/JXs-cQyY_400x400.jpg'
    }]

    return (
      <div className="app">
        <div>
          <button onClick={this.onRemove} >Remove component</button>
          <br />
          {this.state.activated && (
            <Twitter tweets={tweets} loading={this.state.loading}/>
          )}
        </div>
        <div>
          <ContextAPI />
        </div>
        <div>
          <Fragments />
        </div>
        <div>
          <RenderProps />
        </div>
        <div>
          <TypeChecking />
        </div>
        <div>
          <RefsDom />
        </div>
        <div>
          <DumbComponents />
        </div>
        <div>
          <SmartComponents />
        </div>
      </div>
    );
  }
}