import { useState } from "react"

function Form(){
var[hel, sethellochecked]=useState("")

function isHelloChecked(e){
    console.log(e)
    if(e.target.checked == true){
        sethellochecked("hello selected")
    }
    else{
        sethellochecked("it is unchecked")
    }
}


var[rushi, setRushiChecked]=useState("")

function isRushikeshChecked(e){
    console.log(e)
    if(e.target.checked == true){
        setRushiChecked("hello Rushikesh is checked")
    }
    else{
        setRushiChecked("rushikesh is unchecked")
    }
}


return(
    <div>
        <h1>Hello this is from a different login form component</h1>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
        
  <div >

    <label>Hello</label> <input type="checkbox" name="hello" onChange={event => isHelloChecked(event)} />  <br/>
    <label>rushikesh</label> <input type="checkbox" name="rushikesh" onChange={event => isRushikeshChecked(event)} />  <br/>
    <label>chandhana</label> <input type="checkbox" name="chandhana"  onChange={event => isRushikeshChecked(event)}/>  <br/>


    <div>selected check is {hel}</div>
    <div> Rushikesh is {rushi}</div>
    <div>Chandhana is {rushi}</div>
</div>
        



</form>
      
    </div>
)

}

export default Form