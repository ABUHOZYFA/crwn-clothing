import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishblekey = 'pk_test_51HTruTJ4d2PgQgyRsABPIUpGVgnhpKW9aHPTnWzwanyEFUZrrNzoly4FAyRbXwWMPFmXWSLjk0CSsPTDzIjbrSFP00vdINFc4Y';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return(

        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishblekey}
        />
    );
};

export default StripeCheckoutButton;