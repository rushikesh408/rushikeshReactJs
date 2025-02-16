import Navigation from "./NavBar/Navigation";
import Footer from "./HeadersAndFooters/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  let [products, setproducts] = useState([]);

  useEffect(() => {
    async function getProductsfromAPI() {
      console.log("API CALLED HERE");
      var prodapiresponse = await axios.get("https://dummyjson.com/products");
      console.log("API var set HERE");

     
      console.log(products);

      let data = prodapiresponse.data.products.map((product) => {
        product.is_favourite = false;
        return product;
      }, [])

      setproducts(data);
      console.log(" api updated here");
      console.log(products);
    }

    getProductsfromAPI();
  }, []);

  function getproductdetailstoadd(data) {
    let favprod = products.map((product) => {

      if (data.id == product.id) {
        console.log("data here")
        console.log(product)
        console.log(data)
        console.log(data.id)
        console.log(data.is_favourite)
        console.log(product.id)
        console.log(product.is_favourite)
        if (data.is_favourite == false) {
          console.log("falsetotrue")
          product.is_favourite = true;

        } else {
          console.log("true to false")
          product.is_favourite = false;
        }
       
      }
      return product
     
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
        {products.map((product) => (
          <div className="col-3">
            <div className="card shadow ">
              <img src={product.thumbnail} className="card-img-top"></img>

              <div className="card body">
                <div className="card-title"> {product.brand} </div>

                <p className="card-text"> {product.description} </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary"
                  onClick={(e) => getproductdetailstoadd(product)}
                >
                  <i class="bi bi-bag-heart-fill"> </i>
                  {product.is_favourite == true && <span> Remove</span>}
                  {product.is_favourite == false && <span> Add</span>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
export default Courses;
