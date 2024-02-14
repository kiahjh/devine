import React from "react";
import Card from "@/components/Card";
import Profile from "@/components/Profile";

const Home: React.FC = () => (
  <main className="flex gap-20 justify-center bg-zinc-50 p-20">
    <div className="flex flex-col gap-12">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div className="flex flex-col gap-12">
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </div>
  </main>
);

export default Home;
