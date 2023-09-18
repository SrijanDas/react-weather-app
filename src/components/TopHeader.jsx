import React from "react";
import { UilSetting, UilPlus } from "@iconscout/react-unicons";

function TopHeader({ name }) {
  return (
    <div className="flex items-center justify-between">
      <UilPlus size={32} className="text-white" />
      <p className="text-white text-3xl font-medium">{name}</p>
      <UilSetting size={32} className="text-white" />
    </div>
  );
}

export default TopHeader;
