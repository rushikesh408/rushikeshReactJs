import { useEffect, useState } from "react";
import Footer from "../HeadersAndFooters/Footer";
import Navigation from "../NavBar/Navigation";
import axios from "axios";

function UserList() {
  let [users, setUsers] = useState([]);
  let [filteredUsers, setFilteredUsers] = useState([]);
  let userInputData = "";

  useEffect(() => {
    async function getUsers() {
      let apiResp = await axios.get("https://dummyjson.com/users");
      console.log(apiResp.data.users);
      setUsers(apiResp.data.users);
      setFilteredUsers(apiResp.data.users);
    }
    getUsers();
  }, []);

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
    console.log("clicked here")
    let tempData = users.sort((user1, user2) => {
      if (user1.firstName.toLowerCase() < user2.firstName.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    })
setUsers([...tempData])
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

      <div className="row mt-5 mb-5">
        <table className="table table-secondary rounded mt-20">
          <thead>
            <tr>
              <th scope="col" onClick={(event) => handleSort()}>
                FirstName
              </th>
              <th scope="col">Email</th>
              <th scope="col">Profile Photo</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
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

      <div className="row mt-5 mb-5"></div>

      <Footer />
    </div>
  );
}

export default UserList;
