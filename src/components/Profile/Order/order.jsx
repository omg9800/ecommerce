import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import OrderCard from "./orderCard";
import url from "../../../services/service";

function Order() {
  const [orders, setOrders] = useState([]);
  const [parsedOrders, setParsedOrders] = useState([]);
  const user = useSelector((state) => state.user.user);
  const userId = user._id;

  console.log(orders, "orders============>");

  const getOrder = () => {};

  useEffect(() => {
    fetch(`${url}/orders/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      })
      .catch((e) => {
        console.log(e.message);
      });

    parseOrders();
    console.log(parsedOrders);
  }, []);

  const parseOrders = () => {
    let k = [];
    for (let i = 0; i < orders.length; i++) {
      k = k.concat(orders[i].products);
      console.log(orders[i].products);
    }

    setParsedOrders(k);
  };

  return (
    <div>
      <h3 className="center-bold">Your Orders</h3>
      {orders.map((items, i) => {
        return (
          <ol>
            {items.products.map((subItems, sIndex) => {
              return (
                <>
                  <OrderCard product={subItems.productId} />
                </>
              );
            })}
          </ol>
        );
      })}
    </div>
  );
}

export default Order;
