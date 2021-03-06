import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

const masterProductList = [
  {
    name: "Ninja Sh%t",
    price: "$49.99",
    key: v4()
  },
  {
    name: "More Ninja Sh%t",
    price: "$59.99",
    key: v4()
  },
  {
    name: "Kunai",
    price: "$9.99",
    key: v4()
  }
]



function ProductList(props) {
  return (
    <React.Fragment>
      <hr />
      {masterProductList.map((product) =>
        <Product name={product.name}
          price={product.price}
          key={product.key} 
          addToCart = {props.addToCart}/>
      )
      }
    </React.Fragment >
  );
}

ProductList.propTypes = {
  productList: PropTypes.array
}

export default ProductList;