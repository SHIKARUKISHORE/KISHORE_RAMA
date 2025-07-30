import React, { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  // Fetch employees from API
  useEffect(() => {
    fetch("https://localhost:7005/api/Json_Data_")  // Your WebAPI URL
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));
  }, []);

  // Add new employee
  const addEmployee = () => {
    fetch("https://localhost:7005/api/Json_Data_", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, department })
    })
      .then(res => res.json())
      .then(() => {
        setEmployees([...employees, { name, department }]); // Update state
        setName("");
        setDepartment("");
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Employees</h1>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      <table style={{ margin: "30px auto", borderCollapse: "collapse", width: "50%" }} border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
