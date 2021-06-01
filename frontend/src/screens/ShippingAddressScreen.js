import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveShippingAddress} from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const cart = useSelector((state) => state.cart);
  const {shippingAddress} = cart;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({fullName, address, city, postalCode, country})
    );
    props.history.push("/payment");
    //todo dispatch shipping
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            placeholder="Enter full Name"
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>{" "}
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            placeholder="Enter City Name"
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>{" "}
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            placeholder="Enter Postal Code"
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>{" "}
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            placeholder="Enter Country"
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShippingAddressScreen;
