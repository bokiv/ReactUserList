import React, {Fragment, Component} from 'react';

import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Users} from './components/Users/users';



class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       isListView: true
     };
     this.onLayoutToggle = this.onLayoutToggle.bind(this);
   }

   onLayoutToggle(){
     this.setState({
       isListView: !this.state.isListView
     });
   };

   render() { 
    console.log('App ', this.state.isListView);
  return (
    <Fragment> 
    <Header isListView={this.state.isListView} onLayoutToggle={this.onLayoutToggle}/> 
    <Users isListView={this.state.isListView}/> 
    <Footer/>
    </Fragment>
  );
   }
}

export default App;
