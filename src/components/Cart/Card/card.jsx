import React, { useEffect, useState } from "react";
import "./card.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, editCart } from "../../../store/cart";

const Card = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userId = user._id;
  let { title, description, price, image, size, _id } = props.product;
  let { quantity } = props?.product;
  let allSize = [32, 34, 36, 38];
  let products = useSelector((state) => state.cart.items);

  const img = image[0];
  const [qty, setQty] = useState([1, 2, 3, 4, 5]);

  const mapToPost = () => {
    let prods = [];
    products.forEach((e) => {
      prods.push({ productId: e._id, quantity: e.quantity, size: e.size });
    });
    return prods;
  };

  const handleSize = (e) => {
    let items = mapToPost();

    let frontProds = [];
    products.map((el) => {
      if (el._id === _id) {
        frontProds.push({ ...el, size: e.target.value });
      } else {
        frontProds.push({ ...el });
      }
    });
    items.forEach((el) => {
      if (el.productId === _id) {
        el.size = e.target.value;
      }
    });

    dispatch(editCart({ userId, items, frontProds }));
  };

  const handleQty = (e) => {
    let frontProds = [];
    products.map((el) => {
      if (el._id === _id) {
        frontProds.push({ ...el, quantity: e.target.value });
      } else {
        frontProds.push({ ...el });
      }
    });
    let items = mapToPost(products);
    items.map((el) => {
      if (el.productId === _id) {
        el.quantity = e.target.value;
      }
    });

    dispatch(editCart({ userId, items, frontProds }));
  };

  const deleteCart = () => {
    dispatch(removeCart({ userId, _id }));
  };

  return (
    <div className="cart-card-container">
      <div className="cart-card-img-container">
        <img id="cart-card-img" src={img} alt="Card Image" />
      </div>

      <div className="card-details">
        <p className="card-title">{title}</p>
        <p className="card-desc">{description}</p>
        <p className="seller">Sold by: Flashtarsh Commerce</p>
        <div className="card-select">
          <label>
            Size:
            <select name="size" id="size" onChange={(e) => handleSize(e)}>
              {allSize?.map((m, i) => (
                <option
                  value={m}
                  key={i + m}
                  selected={m == props?.product?.size}
                >
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label>
            Qty:
            <select onChange={(e) => handleQty(e)}>
              {qty?.map((m, i) => (
                <option value={m} key={i + m} selected={m == quantity}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          <p className="card-price">
            Rs. {quantity ? quantity * price : price}
          </p>
        </div>
      </div>
      <div className="remove">
        <button onClick={deleteCart}>X</button>
      </div>
    </div>
  );
};

export default Card;
