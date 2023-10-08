import { FC } from "react";
import { NavBar } from "./NavBar";

const Profile: FC = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r dark:from-sky-950 dark:to-black from-white to-slate-400">
      <NavBar />
    </div>
  );
};

export default Profile;
