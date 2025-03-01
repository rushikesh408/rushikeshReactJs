import { useEffect, useState } from "react";
import Footer from "../HeadersAndFooters/Footer";
import Navigation from "../NavBar/Navigation";
import axios from "axios";

function UserList() {
  let [users, setUsers] = useState([]);
  let [filteredUsers, setFilteredUsers] = useState([]);
  let userInputData = "";
  let [id, setId] = useState("")
  let [firstName, setFirstName] = useState("")
  let [email, setEmail] = useState("")
  let [profileImage, setProfileImage] = useState("")




  

  useEffect(() => {
    async function getUsers() {
      let apiResp = await axios.get("https://dummyjson.com/users");
      console.log(apiResp.data.users);
      setUsers(apiResp.data.users);
      setFilteredUsers(apiResp.data.users);
    }
    getUsers();
  }, []);




function handleEditUser(user){

  setId(user.id)
  setEmail(user.email)
  setFirstName(user.firstName)
  setProfileImage(user.image)

}










  function filterd(e) {
    let userInputted = e.target.value;

    let tempData = filteredUsers.filter((user) => {
      let iscontains = user.firstName
        .toLowerCase()
        .includes(userInputted.toLowerCase());
      console.log(iscontains);
      return iscontains;
    });

    setUsers([...tempData]);
  }

  function handleSort() {
    console.log("clicked here");
    let tempData = users.sort((user1, user2) => {
      if (user1.firstName.toLowerCase() < user2.firstName.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
    setUsers([...tempData]);
  }

  async function handleUserDelete(user) {
    let apicallToDeleteUser = await axios.delete(
      "https://dummyjson.com/users/" + user.id
    );

    let tempData = users.filter((deletedUser) => {
      return deletedUser.id != user.id;
    });
    setUsers([...tempData]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Navigation />
        </div>
      </div>
      <div className="col-12">
        <input
          type="input"
          placeholder="search here"
          onChange={(event) => filterd(event)}
        />
      </div>

      <div className="row mt-5 mb-5 col-12">
        <table className="table table-secondary rounded mt-20 col-8 ">
          <thead>
            <tr>
              <th>ID</th>
              <th scope="col" onClick={(event) => handleSort()}>
                FirstName
              </th>
              <th scope="col">Email</th>
              <th scope="col">Profile Photo</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.image}></img>
                </td>
                <td>
                  <button
                    className="btn btn-warning mx-3"
                    onClick={(event) => handleUserDelete(user)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-warning" onClick={event=> handleEditUser(user)}>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form className="col-4">
          <div className="form-group ">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" value={email} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">ID</label>
            <input type="text" className="form-control" value={id}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">FirstName</label>
            <input type="text" className="form-control" value={firstName}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Profile Photo</label>
            <img src={profileImage}/>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="row mt-5 mb-5"></div>

      <Footer />
    </div>
  );
}

export default UserList;
