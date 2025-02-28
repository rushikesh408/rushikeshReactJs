import Navigation from "./NavBar/Navigation";
import Footer from "./HeadersAndFooters/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product.js";

function Courses() {
  let [products, setproducts] = useState([]);
  let [numberofCartItems, setnumberofCartItems] = useState(0);
  let [productClicked, setProductClicked] = useState("")

  useEffect(() => {
    async function getProductsfromAPI() {
      console.log("API CALLED HERE");
      var prodapiresponse = await axios.get("https://dummyjson.com/products");
      console.log("API var set HERE");

      console.log(products);

      let data = prodapiresponse.data.products.map((product) => {
        product.is_favourite = false;
        return product;
      }, []);

      setproducts(data);
      console.log(" api updated here");
      console.log(products);
    }

    getProductsfromAPI();
  }, []);


  function updateCart(){

    setnumberofCartItems(numberofCartItems+1)
  }

  function removecart(){
    setnumberofCartItems(numberofCartItems-1)
  }

  function userClikedproduct(e){
    console.log("title clicked")
    console.log(e)
    setProductClicked(e)
  }

  function getproductdetailstoadd(data) {
    let favprod = products.map((product) => {
      if (data.id == product.id) {
        console.log("data here");
        console.log(product);
        console.log(data);
        console.log(data.id);
        console.log(data.is_favourite);
        console.log(product.id);
        console.log(product.is_favourite);
        if (data.is_favourite == false) {
          console.log("falsetotrue");
          product.is_favourite = true;
        } else {
          console.log("true to false");
          product.is_favourite = false;
        }
      }
      return product;
    });

    setproducts(favprod);
    console.log(data.id);

    console.log(data.is_favourite);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Navigation />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        number of cart items = {numberofCartItems}
      </div>
      <div>
        User clicked = {productClicked}
      </div>
      <div className="row mt-5 mb-5">
        {products.map((product) => (
          <Product product={product} updatecartvar = {updateCart} removecartitems = {removecart} userClikedproductvar = {userClikedproduct}/>
        ))}
      </div>

      <Footer />
    </div>
  );
}
export default Courses;
