import Courses from "./Courses";
function Product({ product, updatecartvar, removecartitems, userClikedproductvar }) {
  console.log(product);

    function addToCart(){
        updatecartvar()
    }

    function removeFromCart(){
        removecartitems()
    }
    function clickedproduct(){
        userClikedproductvar(product.title)
    }
  return (
    <div className="col-5">
      {
        <div>
          <img src={product.thumbnail}></img>
          <h4 onClick={e=> clickedproduct(e)}>{product.title}</h4>
          <p>
            <i class="bi bi-currency-dollar">{product.price}</i>
          </p>
          <button className="btn btn-danger" onClick={e=> clickedproduct()}>Add to cart <i class="bi bi-cart"></i></button>
          <br/> <br/>
          <button className="btn btn-primary" onClick={e=> removeFromCart()}>Remove <i class="bi bi-cart"></i></button>
          <br/> <br/>
        </div>
       
      }
    </div>
  );
}

export default Product;
