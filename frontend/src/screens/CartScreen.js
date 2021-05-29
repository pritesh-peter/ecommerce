import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart, removeFromCart} from "../actions/cartActions";
import MessageBox from "../components/MessageBox";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const {cartItem} = cart;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart </h1>
        {cartItem.length === 0 ? (
          <MessageBox>
            Cart is Empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItem.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      className="small"
                      src={item.image}
                      alt={item.name}
                    ></img>
                  </div>

                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItem.reduce((a, c) => a + c.qty, 0)}items): $
                {cartItem.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItem.length === 0}
              >
                Proceed to CheckOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
