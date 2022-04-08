import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Products from "../Products/products";
import "./style.css";
import App from "../Loader/loader";
import { Link, route, Switch } from "react-router-dom";

const FilterableProducts = (props) => {
  const { searchText } = props;
  const [products, setProducts] = useState([]);
  const [allProds, setAllProds] = useState([]);
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(0);
  let { cat } = useParams();
  console.log(cat, "----->==>");

  // console.log(params.cat, "------------->>");

  useEffect(() => {
    let url;
    if (cat == "male" || cat == "female")
      url = `https://ecommerce-980.herokuapp.com/products/gender/${cat}`;
    else url = `https://ecommerce-980.herokuapp.com/products/category/${cat}`;
    fetch(url) //"http://localhost:6400/products"
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setAllProds(data);
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    const results = allProds.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );
    setProducts(results);
  }, [searchText]);

  useEffect(async () => {
    let k = 0;
    k = await localStorage.getItem("products");
    k = JSON.parse(k)?.length;
    setCount(k);
  }, []);

  return (
    <div className="all">
      {loader == true ? (
        <div
          className="center"
          style={{
            // backgroundColor: "#02176f",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <App />
        </div>
      ) : (
        <>
          <div className="filterable-container">
            <div className="sidebar">
              <Sidebar
                products={products}
                setProducts={setProducts}
                allProds={allProds}
                // setFlag={setFlag}
              />
            </div>
            <div className="products">
              <Products products={products} setProducts={setProducts} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterableProducts;
