import axios from "axios";
import Footer from "../HeadersAndFooters/Footer";
import Navigation from "../NavBar/Navigation";
import { useState } from "react";

function GettingProducts() {
  let [productDetails, setproductDetails] = useState([]);

  async function getProductDetails() {
    let prodDatafromApi = await axios.get("https://dummyjson.com/users");
    console.log(prodDatafromApi.data.users);
    setproductDetails(prodDatafromApi.data.users);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Navigation />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5">
          Here is how i get all the product details from API below <br />
          <button
            className="btn btn-secondary"
            onClick={(e) => getProductDetails()}
          >
            Get prod details
          </button>
       
          <br/>   <br/>   <br/>   <br/>          <div mt-26>
            {Object.keys(productDetails).length > 0 && (
              <div>
                <table className="table table-secondary rounded mt-20">
                  <thead>
                    <tr>
                      <th scope="col">FirstName</th>
                      <th scope="col">Email</th>
                      <th scope="col">Profile Photo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productDetails.map((user) => (
                      <tr>
                        <td>{user.firstName}</td>
                        <td>{user.email}</td>
                        <td>
                          <img src={user.image}></img>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default GettingProducts;
