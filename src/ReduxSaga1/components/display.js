import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchData } from '../redux/action';
class display extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    
    handleFetchData=()=>{
        console.log(1);
        this.props.fetchData()
    }
    componentDidMount(){
        this.handleFetchData()
    }

    render() {
        return (
            <div>
               {this.props.user.length > 0 ? 
               <table className="table-bordered">
                   <thead>
                       <tr>
                            <th>User ID</th>
                            <th>Id</th>
                            <th>Title</th>
                       </tr>
                   </thead>
                   <tbody>
                   {this.props.user.map(user=>{
                   return(
                       <tr>
                           <td>{user.userId}</td>
                           <td>{user.id}</td>
                           <td>{user.title}</td>
                       </tr>
                   )
               })}
                   </tbody>
               </table>
               :null}
                
            </div>
        );
    }
}

const mapStateToProps =(state) =>{
    
    return{
        user : state.user.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    
    return{
        fetchData : () => {
            console.log(2);
            dispatch(fetchData())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(display);