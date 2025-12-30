"use client";

export default function AvatarUpload() {
  async function upload(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);

    await fetch("/api/profile/avatar", {
      method: "POST",
      headers: { Authorization: "Bearer TOKEN" },
      body: formData
    });
  }

  return <input type="file" onChange={upload} />;
}
