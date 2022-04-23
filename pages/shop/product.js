/* eslint-disable react-hooks/rules-of-hooks */
import React,{ useState,useEffect} from "react";
import Layout from "../../components/Layout/Layout";
import ProductImageSection from "../../components/productImageSection/productImageSection";
import data from '../../data/data.json';

const product = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        console.log("cartItems", cartItems);
    }, [cartItems]);
    
  return (
    <Layout>
      <div className="flex flex-between">
        <div className="flex-left w-1/2">
          <ProductImageSection url={data[0].image_url} />
        </div>
        <div className="flex-right m-16 w-1/2">
          <div className="w-1/2">
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>
              {data[0]?.title}
            </p>
          </div>
          <div className="flex">
            <img src="/images/locationIcon.png" alt="" />
            <div className="ml-4">Brazil, Guatemala, India</div>
          </div>
          <div className="my-6">
            <p>{data[0]?.description}</p>
          </div>
          <div className="flex">
            <img src="/images/cartIcon.png" alt="" />
            <div
              onClick={() => {
                setCartItems([...cartItems, data[0]]);
              }}
              style={{ color: "#C9AC60" }}
              className="ml-4"
            >
              Add to Cart
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-xl shadow-xl p-10 h-256">
          <p>Cart Items:</p>
          {cartItems.length === 0 ? (
            <p>No Items found</p>
          ) : (
            cartItems.map((cartItem, index) => {
              return <div key={index}>{index + 1 + ". " + cartItem.title}</div>;
            })
          )}
          {/* {cartItems.map((cartItem, index) => {
            return <div key={index}>{index + 1 + ". " + cartItem.title}</div>;
          })} */}
        </div>
        {/* <h2>This is product</h2> */}
      </div>
    </Layout>
  );
};

export default product;
