import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./app.css";

import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [editBtn, setEditBtn] = useState("btnOff");
  const collectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
  });
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    addUser(newUser);
  };

  const changeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const addUser = (user) => {
    const data = addDoc(collectionRef, user);

    setUsers([...users, { data }]);
  };

  const showUser = (id) => {
    const userNew = users.filter((val) => val.id === id);
    if (userNew) {
      setNewUser(userNew[0]);
    }
    const getDoc = doc(db, "users", id);
    updateDoc(getDoc, newUser);
  };
  const deleteUser = async (id) => {
    const userNew = doc(db, "users", id);
    await deleteDoc(userNew);
  };

  return (
    <div>
      <h1>User Details</h1>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={changeHandler}
        />
        <br />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={newUser.age}
          onChange={changeHandler}
        />

        <br />
        <input type="submit" value="Add User" onClick={submitHandler} />
        <button className={editBtn}>Edit User</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <div key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>
                    <button id={user.id} onClick={(e) => showUser(e.target.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      id={user.id}
                      onClick={(e) => deleteUser(e.target.id)}
                    >
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
