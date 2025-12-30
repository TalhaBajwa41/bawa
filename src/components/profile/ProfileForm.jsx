"use client";
import { useState } from "react";

export default function ProfileForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    bio: ""
  });

  async function saveProfile() {
    await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer TOKEN"
      },
      body: JSON.stringify(form)
    });
  }

  return (
    <div className="bg-slate-900 p-4 rounded">
      <input
        placeholder="First Name"
        className="input"
        onChange={e => setForm({ ...form, firstName: e.target.value })}
      />
      <input
        placeholder="Last Name"
        className="input"
        onChange={e => setForm({ ...form, lastName: e.target.value })}
      />
      <textarea
        placeholder="Bio"
        onChange={e => setForm({ ...form, bio: e.target.value })}
      />
      <button onClick={saveProfile}>Save</button>
    </div>
  );
}
