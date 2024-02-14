import React from "react";

const Profile: React.FC = () => (
  <div
    className="border shadow-lg rounded-lg bg-white p-8 flex flex-col items-center"
    devine-id="ProfileCard"
  >
    <div className="bg-zinc-200 w-20 h-20 rounded-full" />
    <h1 className="text-2xl font-bold mt-4">John Doe</h1>
    <p className="text-zinc-500">Software Engineer</p>
  </div>
);

export default Profile;
