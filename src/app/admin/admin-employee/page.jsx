'use client';
import { useEffect, useState } from 'react';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await fetch('/api/employees');
    const data = await res.json();
    setEmployees(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/employees', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    setForm({ name: '', email: '', phone: '', role: '' });
    fetchEmployees();
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Admin Panel – Employees</h1>

      {/* Add Employee */}
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input placeholder="Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Phone" value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input placeholder="Role" value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })} />
        <button type="submit">Add Employee</button>
      </form>

      {/* Employee List */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
