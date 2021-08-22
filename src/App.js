import React, {Fragment, Component} from 'react';

import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Users} from './components/Users/users';
import {getUsers} from './services/user-services'


class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       isListView: true,
       users : []
     };
     this.onLayoutToggle = this.onLayoutToggle.bind(this);
   }

   onLayoutToggle(){
     this.setState({
       isListView: !this.state.isListView
     });
   };

   componentDidMount(){
    getUsers().then(users => this.setState({users : users}))
  }


   render() { 
    console.log('App ', this.state.isListView, this.state.users);
  return (
    <Fragment> 
    <Header isListView={this.state.isListView} onLayoutToggle={this.onLayoutToggle} users={this.state.users}/> 
    <Users isListView={this.state.isListView} users={this.state.users}/> 
    <Footer/>
    </Fragment>
  );
   }
}

export default App;
