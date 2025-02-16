import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from "./HeadersAndFooters/Header";
import Navigation from "./NavBar/Navigation";


  function SignUp(){


   var [passv,retrievePass] = useState("hello") 
   var [accountcreationmsg, accountcreationstatus] = useState("")

   function passwordInputted(e){
      retrievePass(e.target.value)
   }


   var [emailentered, retrieveEmail] = useState("")

   function enteredEmail(e){
    retrieveEmail(e.target.value)
   }


   var [mobileEntered, retrieveMobileNumber] = useState("")
   function enteredPhoneNumber(e){
    retrieveMobileNumber(e.target.value)
   }


   var [nameEntered, retrieveName] = useState("")

   function enteredName(e){
    retrieveName(e.target.value)
   }



   var [emaillengtherror, setEmailErrorMessage] = useState("")






  async function handleFormValidation(){
    //console.log(emailentered.length)
    if(emailentered.length <3){
      setEmailErrorMessage("email input length is invalid")
    }
    else{
      setEmailErrorMessage("")
      var apiInputData = {
        'name' : nameEntered,
        'email' : emailentered , 
        'mobile' : mobileEntered,
        'password' : passv
      }
      console.log(apiInputData)
          var apipostData =  await(axios.post('https://api.softwareschool.co/auth/signup',apiInputData))
          console.log(apipostData.data.result)

          if(apipostData.data.result=="SUCCESS"){
            accountcreationstatus(apipostData.data.result)
            toast.success("successssss")
          }
          else{
            accountcreationstatus(apipostData.data.result)
            toast.error("failed");
            <ToastContainer />
          }
    }

  }

    return(

     
      <div>
             <Navigation/>
      <h1> SignUp page</h1>
      <form >
        <div class="form-group" >
          <label for="exampleInputEmail1">Email address</label>

          <input type="email"   onChange={e=> enteredEmail(e)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          <p>{emaillengtherror}</p>
        </div>


        <div class="form-group" >
          <label for="exampleInputEmail1">Name</label>

          <input type="name"   onChange={e=> enteredName(e)}  className="form-control" id="examplname" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          <p>{emaillengtherror}</p>
        </div>


        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password"  onChange={e => passwordInputted(e)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>


        <div class="form-group" >
          <label for="exampleInputEmail1">Mobile Number</label>

          <input type="email"   onChange={e=> enteredPhoneNumber(e)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          <p>{emaillengtherror}</p>
        </div>

        <br></br>
         <br/>

      <div>
      <a  class="btn btn-primary" onClick={e=> handleFormValidation(e)}>singup here </a> <br/> <br/>
      <a href="/" class="btn btn-primary"> Click here to goto Home</a>
        
        <div className="alert alert-success"> account creation status {accountcreationmsg}</div>
      
     
         <h1>

          Email  is {emailentered}  <br/>
          name  is {nameEntered}<br/>
          password is {passv}<br/>       
          mobile is {mobileEntered}<br/>
          </h1>

         
      </div>

        
      </form>

  
    </div>
    
    )
  }

  export default SignUp 