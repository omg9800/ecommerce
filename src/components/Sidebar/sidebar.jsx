import React, { Component, useState, useEffect } from "react";
import "./sidebar.css";
const Sidebar = ({ products, setProducts, setFlag, flag, allProds }) => {
  const [checkedState, setCheckedState] = useState(new Array(2).fill(false));
  const [total, setTotal] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [checkedStateDiscount, setCheckedStateDiscount] = useState(
    new Array(3).fill(false)
  );

  const handleOnChange = (e) => {
    let position = e.target.id;
    const updatedCheckedState = checkedState.map((item, index) =>
      index == position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    let prods = products.filter((m) => m.price >= e.target.value);
    setProducts(prods);
  };

  const handleDiscount = (e) => {
    console.log(e.target);
    // let position = e.target.id;
    // const updatedCheckedState = checkedStateDiscount.map((item, index) =>
    //   index == position ? !item : item
    // );
    // setCheckedStateDiscount(updatedCheckedState);

    let prods = products.filter((m) => m.discount >= e.target.value);
    setProducts(prods);
  };
  const handleGender = (e) => {
    console.log(e.target.value);

    console.log(flag, products);
    let prods = allProds.filter((m) => m.gender == e.target.value);
    setProducts(prods);
  };

  return (
    <div className="sidebar-container">
      <div className="filter">
        <h1>Filter</h1>
        <div className="filter-by-gender">
          <p className="sub-heading">Gender</p>
          <ul>
            <li>
              <input
                type="radio"
                value="male"
                name="gender"
                onChange={handleGender}
                id="male"
              />{" "}
              <label htmlFor="male">Male</label>
            </li>
            <li>
              <input
                type="radio"
                value="female"
                name="gender"
                onChange={handleGender}
                id="female"
              />{" "}
              <label htmlFor="female">Female</label>
            </li>
          </ul>
        </div>

        <div className="filter-by-price">
          <p className="sub-heading">Price</p>
          <ul>
            <li>
              <input
                type="checkbox"
                id="0"
                name="1st"
                value={600}
                checked={checkedState[0]}
                onChange={handleOnChange}
              />
              <label htmlFor="0"> 600 and Above</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="1"
                name="2nd"
                value={1000}
                checked={checkedState[1]}
                onChange={handleOnChange}
              />
              <label htmlFor="1"> 1000 and Above</label>
            </li>
          </ul>
        </div>
        <div className="filter-by-discount">
          <p className="sub-heading">Discount</p>
          <ul>
            <li>
              <input
                type="radio"
                id="1st"
                name="discount"
                value={10}
                // checked={checkedStateDiscount[0]}
                onChange={handleDiscount}
              />
              <label htmlFor="1st"> 10% and Above</label>
            </li>
            <li>
              <input
                type="radio"
                id="2nd"
                name="discount"
                value={20}
                // checked={checkedStateDiscount[1]}
                onChange={handleDiscount}
              />
              <label htmlFor="2nd"> 20% and Above</label>
            </li>
            <input
              type="radio"
              id="3rd"
              name="discount"
              value={30}
              // checked={checkedStateDiscount[2]}
              onChange={handleDiscount}
            />
            <label htmlFor="3rd">30% and Above</label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
