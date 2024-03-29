import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {

  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState ("");
  const idRef = useRef (); 
  const firstNameRef = useRef ();
  const lastNameRef = useRef ();
  const emailRef = useRef ();
  const avatarRef = useRef ();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setEmployees(data.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const addEmployee = () => {
    if (idRef.current.value === "") {
        setMessage("ID is required!");
    } else if  (firstNameRef.current.value === "" ) {
      setMessage("First name is required and should only contain letters!");
    } else if (lastNameRef.current.value === "" ) {
      setMessage("Last name is required and should only contain letters!");
    } else if (emailRef.current.value === "") {
      setMessage("Email is required and should match a valid email pattern!");
    } else if (emailRef.current.value.includes("@") === false) {
        setMessage("Email must include @");
    } else if (!avatarRef.current.files.length) {
      setMessage("Avatar is required!");
    } else {
      setMessage("Added employee: " + firstNameRef.current.value);
      const newEmployee = {
        id: Number(idRef.current.value),
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        email: emailRef.current.value,
        avatar: URL.createObjectURL(avatarRef.current.files[0]), 
      };
      setEmployees([...employees, newEmployee]);
      idRef.current.value = "";
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      avatarRef.current.value = "";
    }
  };

  const deleteEmployee = (index) => {
    employees.splice(index, 1);
    setEmployees(employees.slice());
  }

  return (
  <div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((employee, index) => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.first_name}</td>
          <td>{employee.last_name}</td>
          <td>{employee.email}</td>
          <td>
            <img src={employee.avatar} alt="Avatar" />
          </td>
          <td>
            <Button onClick={() => deleteEmployee(index)} type="button" variant="danger">Delete</Button>
          </td>
        </tr>
            ))}

        <tr className="input-row">
          <td><input ref={idRef} type="number" placeholder="ID" className="form-control"/></td>
          <td><input ref={firstNameRef} type="text" placeholder="First name" className="form-control"/></td>
          <td><input ref={lastNameRef} type="text" placeholder="Last name" className="form-control"/></td>
          <td><input ref={emailRef} type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={avatarRef} type="file" placeholder="Avatar" className="form-control"/></td>
          <td><Button onClick={addEmployee} type="submit" variant="success">Add</Button></td>
        </tr>   
        </tbody> 
        </Table>
      </div>
        <h4 style={{color: "red"}}>{message}</h4>
  </div>)
}
export default Employees;