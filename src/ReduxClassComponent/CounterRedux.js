import { useState } from "react";
import Footer from "../HeadersAndFooters/Footer";
import Navigation from "../NavBar/Navigation";
import { useSelector } from "react-redux";

function CounterRedux() {

 let countnumber = useSelector(state => state.countnumber)

  return (
    <div>
      <div>
        <Navigation />
      </div>

    <h1>
        <button className="btn btn-primary me-2">+</button>
        <button className="btn btn-secondary" >-</button>
    </h1>
    <h1>
        {countnumber}
    </h1>
    <div>
       
    </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CounterRedux
