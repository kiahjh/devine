import React from "react";
import InfoCard from "@/components/Card";
import ProfileCard from "@/components/Profile";

const Home: React.FC = () => (
  <main className="flex gap-20 justify-center bg-zinc-50 p-20">
    <div className="flex flex-col gap-12">
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
    <div className="flex flex-col gap-12">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  </main>
);

export default Home;
