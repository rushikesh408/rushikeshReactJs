import { useState } from "react";
import Footer from "./HeadersAndFooters/Footer";

import Navigation from "./NavBar/Navigation";

function ProfileUpdate() {

let [profile, updateprofile] = useState("")

    function handleProfileUpdate(profiledetails){
        // updateprofile(profiledetails.target.files[0])
        // console.log(profile)
        // updateprofile(profiledetails.target.files[0].lastModifiedDate)
        // console.log(profile)
        console.log(profiledetails.target.files[0])
        let filesize = (profiledetails.target.files[0].size)/1024
        console.log(filesize + "  KB")

        let filename = (profiledetails.target.files[0].type).split("/")

        console.log(filename[1]) // file type
        console.log(filesize<100)
        console.log(typeof(filename))
        let fileeeeeeeeeee = filename[1]
        console.log(typeof(fileeeeeeeeeee))
        console.log( fileeeeeeeeeee == "pdf")

        if(filesize <100 && (fileeeeeeeeeee=="pdf" || fileeeeeeeeeee =="jpeg")){
          updateprofile("no errors, upload successful")
        }
        else{
          updateprofile("error please try again")
        }

    }

  return (
    <div className="container">
      <div className="row">
        <Navigation />
      </div>
      <div className="row mt-t mb-5">
        <div className="col-12"> 
          
          <h1>Profile update here:</h1>
  
          
          <input className="form-control" type="file" onChange={e=> handleProfileUpdate(e)}/>
          
          </div>
          <div>
            STATUS : {profile}
          </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default ProfileUpdate;
