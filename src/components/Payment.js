import React, {Component} from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';
import { connect } from 'react-redux'
import { isTokenExpired } from '../components/Auth';

class Payment extends Component {
	instance;
	message;

	state = {
		clientToken: 'sandbox_x6m5646w_kkzt62qstx5z3mt8'
	};

	componentDidMount(){
		console.log(isTokenExpired(localStorage.getItem('token')))
	   if(isTokenExpired(localStorage.getItem('token'))){
		   this.props.history.replace('/login')
	   }
   }


	// async componentDidMount() {
	// 	// Get a client token for authorization from your server
	// 	//const response = await fetch("server.test/client_token");
	// 	//const clientToken = await response.json(); // If returned as JSON string

	// 	this.setState({
	// 		clientToken
	// 	});
	// }

	async buy() {
		// Send the nonce to your server
		const  {nonce}  = await this.instance.requestPaymentMethod();
		const data = {
			paymentMethodNonce: nonce,
			amount: this.props.total
		}
		console.log(nonce)
		axios.post('http://localhost:3000/checkout', data)
		.then(response => {
		

			console.log(response)
			if(response.data.success)
			this.props.history.push("/success");
		});
	
	}

	render() {
		if (!this.state.clientToken) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			return (
				<div className="payment_card">
					<DropIn
						options={{ authorization: this.state.clientToken}}
							onInstance={instance => (this.instance = instance)}
					/>
					
					<button className="waves-effect waves-light btn"  onClick={this.buy.bind(this)}>Confirm</button>
				</div>
			);
		}
	}
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Payment);