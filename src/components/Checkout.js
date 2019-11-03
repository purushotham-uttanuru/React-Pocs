import React, { Component } from 'react';
import { connect } from 'react-redux'
import { isTokenExpired } from './Auth';

class Checkout extends Component{

    componentDidMount(){
        //  console.log(localStorage.getItem('token'))
        // if(!isTokenExpired(localStorage.getItem('token'))){
        //     this.props.history.replace('/login')
        // }
    }
    componentWillUnmount() {
             this.props.substractShipping()
   }

   handlePayment = () => {
    
    this.props.history.push("/payment")
}


    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <p><b>Price: {item.price}$</b></p> 
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                    <h5>Your orders:</h5>
                    <ul className="collection">
                        {addedItems}
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </ul>
                    <div className="container">
       
      <button onClick={this.handlePayment} className="waves-effect waves-light btn">Pay now</button>
    </div></div>
          
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)