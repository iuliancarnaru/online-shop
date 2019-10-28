import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_wCllDX0fSKqj05UZVslAc1AN00CapZrVQn`;

  const onToken = token => {
    console.log(token);
    alert("Payment succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Colthing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
