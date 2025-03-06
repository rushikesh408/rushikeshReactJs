import axios from "axios"
import { useState } from "react"
import Header from "./HeadersAndFooters/Header"
import Navigation from "./NavBar/Navigation"

function Login(){




  var [loginemailvalue, setloginemailvalue] = useState("")
  var [passwordvalue, setpasswordvalue] = useState("")
  var [loginjson , loginjsonvalue] = useState("")
  var [displaynameapp, setdisplayName] = useState("")


  function loginemail(e){
    setloginemailvalue(e.target.value)
  }
  function loginpassword(e3){
    setpasswordvalue(e3.target.value)
  }


 
    async function handleLogin(login){
      var loginapidata = {
        email: loginemailvalue,
        password : passwordvalue
      }

      
      try{
        var apipassingdata = await axios.post('https://api.softwareschool.co/auth/login',loginapidata)
        if(apipassingdata.data.result == 'SUCCESS'){
          console.log(apipassingdata.data.result)
          console.log(apipassingdata)
          loginjsonvalue(apipassingdata.data.message)

          console.log(apipassingdata.data.data.userId)

          console.log(apipassingdata.data.data.name)

        //   var userDisplayName2 = apipassingdata.data.data.name
        //   console.log("rushikesh here ")
        // console.log(userDisplayName2)

        setdisplayName(apipassingdata.data.data.name)
        console.log("rushikesh here ")
        console.log("rushikesh here ")
        console.log(displaynameapp)
        console.log(displaynameapp)    
        console.log(displaynameapp)

          localStorage.setItem('rushikshtechID',apipassingdata.data.data.userId)
          localStorage.setItem('rushikeshtechTokenid',apipassingdata.data.data.token
          )

          //window.location = '/'
        }
        else{
          console.log(apipassingdata.data.result)
          loginjsonvalue(apipassingdata.data.message)
        }
    
      }
      catch(anyerror){
        console.log("hello ")
        console.log(anyerror)
        console.log(anyerror)
        console.log(anyerror)
        loginjsonvalue(anyerror.message)

      }
      }
    

  

    return(
        <div>
          <Navigation/>
         
           <Header message={displaynameapp}/>
          <h1>Login page</h1>
     <form >
       <div class="form-group" >
        <div>
         <h1 text-align='center'>Login Page</h1>
        </div>
         <label for="exampleInputEmail1">Email address</label>
         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e=> loginemail(e)} />
         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div class="form-group">
         <label for="exampleInputPassword1">Password</label>
         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e3=>loginpassword(e3)} />
       </div>
       <div>
        username is  {loginemailvalue} password is   {passwordvalue} and and {displaynameapp}
       </div> <br/>

       <a  class="btn btn-primary" onClick={login => handleLogin(login)}>  Login</a> 


       <h1>login is {loginjson}</h1>
       
       
       <br/>
        <br/> <br/> <br/> <br/>
       <a href="/signup2" class="btn btn-primary">Click here to singup</a> <br/>  
 
     </form>
     <a href="/" class="btn btn-primary"> Click here to goto Home</a>
   </div>
    )
}

export default Login