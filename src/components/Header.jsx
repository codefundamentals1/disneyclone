import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import propic from "../assets/Images/propic.png";
import HeaderItems from "./HeaderItems";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
} from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = () => {

    const [toggle, setToggle] = useState(false);


  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    { name: "Search", icon: HiMagnifyingGlass },
    {
      name: "Watchlist",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <>
      <div className="flex items-center  gap-8 justify-between p-5">
        <div className="flex items-center gap-5  ">
          <img
            src={logo}
            alt="not found"
            className="w-[80px] md:w-[120px] object-cover"
          />
          <div className="hidden md:flex gap-8">
            {menu.map((item) => (
              <HeaderItems name={item.name} Icon={item.icon} />
            ))}
          </div>

          <div className="md:hidden flex gap-8">
            {menu.map(
              (item, index) =>
                index < 3 && <HeaderItems name={""} Icon={item.icon} />
            )}

           <div className="md:hidden  " onClick={()=>setToggle(!toggle)}>
              <HeaderItems name={""} Icon={BsThreeDotsVertical} />
              {toggle? <div className="absolute mt-3 bg-[#121212] border-[1px] p-3  hover:underline-offset-8">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItems name={item.name} Icon={item.icon} />
                    )
                )}
              </div>:null}
            </div>
          </div>
        </div>

        <img className="w-[40px] rounded-full " src={propic} alt="not found" />
      </div>
    </>
  );
};

export default Header;
