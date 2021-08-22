import React from 'react'
//import { users} from '../../Data/data';

 //import { getUsers } from '../../services/user-services';

import { ListView } from './components/ListView';
import { GridView} from './components/GridView';


export class Users extends React.Component {
 
   render (){
    console.log(this.props.users);

    return  (
      this.props.isListView
      ? <ListView users={this.props.users}/> 
      : <GridView users={this.props.users}/>

    )};
    
}

    