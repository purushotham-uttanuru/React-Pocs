import React,{Component} from 'react'

class PaymentSuccess extends Component {

    render(){
        return (<div>
            <h3>Success</h3>
            <p>Your Drop-in UI is working! Check your 
                <a href="https://sandbox.braintreegateway.com/login">
                 sandbox Control Panel</a> for your test transactions.</p>
               </div>)
    }
}

export default PaymentSuccess;