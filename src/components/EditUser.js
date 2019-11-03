import React, { Component } from 'react';
import axios from 'axios';
import '../User.css'


class EditUser extends Component {
 
    state={
        firstName:this.props.firstName,
        lastName:this.props.lastName,
        name:this.props.name,
        email:this.props.email,
        mobile:this.props.mobile,
        password:this.props.password,
        user:'',
        id:''
        
        }

        componentDidMount() {
            console.log(this.props)
            axios.get("http://localhost:3000/getone/"+ this.props.match.params.id)
            .then(response => {
                console.log(response.data)
            })
        }


        updateDataHandler = (e) => {
    
            e.preventDefault();
            const data = {
              id: this.props.id,
              firstName:this.state.firstName,
              lastName:this.state.lastName,
              name: this.state.name,
              email: this.state.email,
              mobile: this.state.mobile,
              password: this.state.password
             
              
          };
          if( this.state.name !== '' && this.state.email!== '' ){
            axios.put("http://localhost:3000/update" , data)
                .then(response => {
                    console.log(response.data);
                    
                    this.setState({user: 'Success'});
                    alert("saved");
                }).catch(error => {
                     console.log(error);
                    //this.setState({error: true});
                });
            }
            else{
                alert("Please update  details")
            }
        }
        userpage=()=>{
            this.props.history.goBack()
        }

  render() {

return(
    <div className="container container_modified table_container">
    <div className="innerContainer">
  <div className="row">
  <div className="col-md-12">
  <h3>Edit User</h3></div></div>
 
 <form onSubmit={e => {this.updateDataHandler(e)}}>

 <div className="row">
     <div className="col-md-3 col-xs-12  xs-only-text-left text-right padding_right_0">
          <label>First Name:</label> 
     </div>
     <div className="col-md-9 col-xs-12">
     <input className="form-control" type='text'  name="name" placeholder="First Name" value={this.state.firstName} required onChange={(event) => this.setState({firstName: event.target.value})}/>
     </div>
</div>

<div className="row">
     <div className="col-md-3 col-xs-12  xs-only-text-left text-right padding_right_0">
          <label>Last Name:</label> 
     </div>
     <div className="col-md-9 col-xs-12">
     <input className="form-control" type='text'  name="name" placeholder="First Name" value={this.state.lastName} required onChange={(event) => this.setState({lastName: event.target.value})}/>
     </div>
</div>



  <div className="row">
     <div className="col-md-3 col-xs-12  xs-only-text-left text-right padding_right_0">
          <label>User Name:</label> 
     </div>
     <div className="col-md-9 col-xs-12">
     <input className="form-control" type='text'  name="name" placeholder="First Name" value={this.state.name} required onChange={(event) => this.setState({name: event.target.value})}/>
     </div>
</div>


  <div className="row">
      <div className="col-md-3 col-xs-12  xs-only-text-left text-right padding_right_0">            
            <label>Email:</label></div>
            <div className="col-md-9 col-xs-12"> 
            <input className="form-control" type='email'  name="email" placeholder="Email" value={this.state.email} required onChange={(event) => this.setState({email: event.target.value})}/>
  </div></div>
 
  <div className="row">
     <div className="col-md-3 col-xs-12  xs-only-text-left text-right padding_right_0">
          <label>Mobile:</label> 
     </div>
     <div className="col-md-9 col-xs-12">
     <input className="form-control" type='text'  name="name" placeholder="First Name" value={this.state.mobile} required onChange={(event) => this.setState({mobile: event.target.value})}/>
     </div>
</div>
<div className="row">
     <div className="col-md-3 col-xs-12  xs-only-text-left text-right padding_right_0">
          <label>Password:</label> 
     </div>
     <div className="col-md-9 col-xs-12">
     <input className="form-control" type='text'  name="name" placeholder="First Name" value={this.state.password} required onChange={(event) => this.setState({password: event.target.value})}/>
     </div>
</div>
 
  <div className="row buttons_row mobile_btn_row">
  <div className="col-md-6 col-xs-12 text-right">
     <button onClick={this.userpage} className="btn btn-primary mobile_button back_btn">Back</button>
     {/* <button type="submit" className="btn btn-primary mobile_button">update</button> */}
 </div>
 <div className="col-md-6 col-xs-12 text-left">
     {/* <button onClick={this.userpage} className="btn btn-primary mobile_button back_btn">Back</button> */}
      <button type="submit" className="btn btn-primary mobile_button">update</button> 
 </div>
  </div></form></div></div>
 




        )}
}











export default EditUser;











