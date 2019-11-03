import React, { Component } from 'react';
import axios from 'axios';
import '../index.css'



class User extends Component {
 

state={
    test:[]  
}
   
getAllUsers() {
  axios.get("http://localhost:3000/get").then(res =>{ 
    this.setState({test:res.data})});
}
    componentDidMount() {
       
       this.getAllUsers(); 
   }
   componentDidUpdate() {
       
    this.getAllUsers(); 
}
   adduser=()=>{
    this.props.history.push(this.props.match.url+"/add")
   }
  

   deleteUser=(id)=>{
    axios.delete('http://localhost:3000/delete/'+id)
        .then(res => {
          
        });
  }

edit= id =>{
  this.props.history.push(this.props.match.url+'/edit/'+id);
}


  render() {

  return (

    <div>

    <div className="container">
      <div className="row">
        <div className="table-responsive">
          <table className="table table-bordered  main_table">
            <thead className="thead_size">
              <tr>


                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>password</th>
                    <th colSpan="3">Actions</th>
                  </tr>
                </thead>
                <tbody>{this.state.test.map((item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.password}</td>
                    <td><button className="btn btn-primary btn-xs" onClick={() => { this.edit(item.id) }}>Edit</button></td>
                    <td><button className="btn btn-danger btn-xs delete_btn" onClick={() => { this.deleteUser(item.id) }}>Delete</button></td>
                    {/* <td><button onClick={this.adduser} className="btn btn-primary mobile_button btn_space">add</button></td> */}
                  </tr>

                )
                ))}
                </tbody>
              </table>
            </div>
          </div>
 <div><button onClick={this.adduser} className="btn btn-primary mobile_button btn_space">Add User</button></div>
        </div>
        <div></div>
       

      </div>
    )
}


}








export default User;











