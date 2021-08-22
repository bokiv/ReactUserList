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
       users : [],
       isRefresh : true,
       search : []
     };
     this.onLayoutToggle = this.onLayoutToggle.bind(this);
   }

   onLayoutToggle(){
     this.setState({
       isListView: !this.state.isListView
     });
   };
   
   onBtnRefresh = () => {
    getUsers().then(users => this.setState({users : users}))
     this.setState({
       isRefresh : !this.state.isRefresh
     });
   };

   onTyping = (e) => {
    console.log(e.target.value)
   }

   componentDidMount(){
    getUsers().then(users => this.setState({users : users}))
  }


   render() { 
    console.log('App ',  this.state.isRefresh);
  return (
    <Fragment> 
    <Header isListView={this.state.isListView} onLayoutToggle={this.onLayoutToggle} users={this.state.users} 
            isRefresh={this.state.isRefresh} onBtnRefresh={this.onBtnRefresh} onTyping={this.onTyping}/> 
    <Users isListView={this.state.isListView} users={this.state.users} isRefresh={this.state.isRefresh} /> 
    <Footer/>
    </Fragment>
  );
   }
}

export default App;
