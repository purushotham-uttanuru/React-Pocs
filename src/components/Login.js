import React,{ Component } from 'react';
import axios from 'axios';


class Login extends Component{

    state={
        userName:'',
        password:'',
    }
  
    resetForm = () => {
        this.setState({
            
            userName: '',
            password: ''
        })
     }
     
    
  
    postDataHandler = (e) => {

        e.preventDefault();
       
        const data = {
            
           
            userName:this.state.userName,
            
            password: this.state.password
        };
        
    
        axios.post('http://localhost:3000/login', data)
            .then(response => {
                    localStorage.setItem('token', response.data.token);
                    this.props.history.goBack();
               
            });
      
    }

    render ()
    {  
       
        if(this.state.Error){

            var status=<div className="Error">{this.state.Error}</div>
        }
      
      

        let user = <p style={{ textAlign: 'center' }}></p>;
      
        user = (
        
          
               <div>
               <div className="container table_container">
                <div className="innerContainer">
                <div>{status}</div>
              <div className="row">
              <div className="col-md-12" >
              <h3 className="head">Login</h3></div></div>
             
              
           <form onSubmit={e => {this.postDataHandler(e)}}   >
               <div className="row">
                 <div className="col-md-3 col-xs-12 xs-only-text-left text-right padding_right_0">
                      <label>User Name:</label> 
                 </div>
                 <div className="col-md-9 col-xs-12">
                 <input className="form-control" name="username" type='text' placeholder="User Name" value={this.state.userName} required onChange={(event) => this.setState({userName: event.target.value})}/>
                 </div>
            </div>
             
              <div className="row">
                <div className="col-md-3 col-xs-12 col-xs-12 xs-only-text-left text-right padding_right_0">
                  <label>Password:</label> 
                  </div>
                  <div className="col-md-9 col-xs-12">
                  <input type='password' className="form-control"  placeholder="Password" value={this.state.password} required onChange={(event) => this.setState({password: event.target.value})}/>
              </div></div>
             
              
              
              <div className="row mobile_btn_row">
              
              <div className="col-md-6 col-xs-6  padding_0 md-text-right">
                 <button type="button" className="btn btn-primary mobile_button btn_space" onClick={this.resetForm} >Reset</button>
             </div>
              <div className="col-md-6 col-xs-6 padding_0 md-text-left">
                 <button type="submit" className="btn btn-primary mobile_button btn_space" >Login</button>
             </div>
             
             </div>
             
             
             </form>
             
             
             </div></div>
            
            </div>
        );
        
        return user;
     
    }
   
}

export default Login;