import Courses from "./Courses";
import Form from "./Form";
import Footer from "./HeadersAndFooters/Footer";
import Header from "./HeadersAndFooters/Header";
import Navigation from "./NavBar/Navigation";

function Home(){

    var loginStatus = localStorage.getItem('rushikshtechID')
   
    console.log(loginStatus)

    function logouteventset(e){
        localStorage.clear()
        window.location.reload()
    }



    return(


        <div>
        
            <Navigation/>
   

            {
                loginStatus == null && <div> <a href="/signup2" class="btn btn-primary">Hello Click here to singup</a> <br/><br/> </div>
            }
            {
                loginStatus == null && <div>  <a href="/login" class="btn btn-primary">Hello Click here to Login</a> <br/><br/> </div>
            }
              {
                loginStatus != null && <div>  <a href="" class="btn btn-primary" onClick={e => logouteventset() }>Hello Click here to logout</a> <br/><br/> </div>
            }


            <h1>WeLCOME TO RUSHIKESH TECH</h1> 
            
           

                            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                v
           <Form/>



           <Footer/>
        </div>

    


    )
}

export default Home;