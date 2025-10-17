import React from "react";

export default function Dashboard({ userData }) {
  if (!userData) return <div>Loading...</div>; // optional

  return (
    <div className="border-2 rounded-2xl border-white p-5 bg-pink-300 text-black">
      <h1 className="mb-5 font-bold">Welcome, {userData.username}!</h1>
      <p className="mb-5 text-2xl">Email: {userData.email}</p>
      <p className="mb-5 text-2xl">User ID: {userData.id}</p>
    </div>
  );
}
