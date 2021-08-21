import React from 'react'
//import { users} from '../../Data/data';

 import { getUsers } from '../../services/user-services';

import { ListView } from './components/ListView';
import { GridView} from './components/GridView';


export class Users extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users : []
    }

  }
  componentDidMount(){
    getUsers().then(users => this.setState({users : users}))
  }


  render (){
    console.log(this.state.users);

    return  (
      this.props.isListView
      ? <ListView users={this.state.users}/> 
      : <GridView users={this.state.users}/>
    )};
    
}

    