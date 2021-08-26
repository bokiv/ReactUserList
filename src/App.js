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
       search : "",
       filteredUsers : []
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
      this.setState({
        search : e.target.value,
        
      });
    console.log(e.target.value) 
   }

   getFilteredUser = () => {
     this.setState({
      filteredUsers : this.state.filterUsers
     })
     const filterUsers = getUsers().filter(user => user.name.first.toLowerCase().includes(this.search.toLowerCase()));
     let filteredUsers = filterUsers;
     return filteredUsers
   }
   
  //  onTyping = () => {
  //   getUsers().filter((search) => {
  //     if(this.search === '') {
  //       return search
  //     }else if (this.users.name.first.toLowercase().includes(this.search.toLowercase())){
  //       return search
  //     }
  //   }).then(users => this.setState({users : users}))
  //  }

   componentDidMount(){
    getUsers().then(users => this.setState({users : users}))
  }


   render() { 
    console.log('App ',  this.state.isRefresh);
  return (
    <Fragment> 
    <Header isListView={this.state.isListView} onLayoutToggle={this.onLayoutToggle} users={this.state.users} 
            isRefresh={this.state.isRefresh} onBtnRefresh={this.onBtnRefresh} onTyping={this.onTyping} search={this.state.search} /> 
    <Users isListView={this.state.isListView} users={this.state.users}  isRefresh={this.state.isRefresh} onTyping={this.onTyping} 
            search={this.state.search} getFilteredUser={this.getFilteredUser} /> 
    <Footer/>
    </Fragment>
  );
   }
}

export default App;
