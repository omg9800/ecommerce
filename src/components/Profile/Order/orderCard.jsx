import React from "react";

function OrderCard(props) {
  let { title, description, price, rating, image, category, size, _id } =
    props.product;

  return (
    <div
      className="order card"
      style={{
        display: "flex",
        borderBottom: "1px solid",
        height: "200px",
        marginBottom: "5px",
        padding: "5px",
      }}
    >
      <div className="cart-card-img-container">
        <img id="cart-card-img" src={image} alt="Card Image" />
      </div>

      <div className="card-details">
        <p className="card-title">{title}</p>
        <p className="card-desc">{description}</p>
        <p className="seller">Sold by: Flashtarsh Commerce</p>
        <div className="card-select">
          <label>Size:</label>
          <label>Qty:</label>

          <p className="card-price">
            {/* Rs. {selectedQty[ind] > 1 ? selectedQty[ind] * price : 1 * price} */}
            {/* Rs. {quantity ? quantity * price : price} */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
