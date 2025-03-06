import axios from "axios";
import { useEffect } from "react";
import ApiCustom from "./Utils/ApiCustom";

function GetRegisteredCourses() {
   
  useEffect(() => {

   

    let userid = {
        userId : localStorage.getItem('rushikshtechID')
       
    }

    async function apicalledtoCourses(){
        let apicall = await customApi.post("https://api.softwareschool.co/courses/getPurchasedCourses",userid)
        console.log(apicall)
    }
    apicalledtoCourses()
  

  }, []);

  return <div>Hello these are your Courses</div>;
}

export default GetRegisteredCourses;
