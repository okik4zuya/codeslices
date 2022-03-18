import React, { useState, useEffect } from "react";
import { Center, Flex, Grid, GridItem, HStack, Square } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_SIDE_MENU } from "../../constants/layoutConstants";
import { HiHome } from "react-icons/hi";

import { FaWindowRestore } from "react-icons/fa";
import { set, setActive } from "../../actions/layoutActions";

export default function SideMenuItem({ title, children }) {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { showSideMenu, active } = layout;

  const handleClick = () => {
    dispatch(setActive(title));
  };

  return (
    <div
      className={`${
        active === title && "bg-gold  text-white"
      }  rounded-lg cursor-pointer pl-2 pr-4 relative`}
      onClick={handleClick}
    >
      <Flex className="">
        <div
          className={`${
            active === title && "text-white"
          } w-[30px] h-full py-2  `}
        >
          <Square size="30px" className="">
            {children}
          </Square>
        </div>

        <div className={`py-2  h-full  `}>
          <Center h="30px" className="">
            <div
              className={` ${
                active === title && "text-white"
              } font-bold text-sm`}
            >
              {title}
            </div>
          </Center>
        </div>
      </Flex>
    </div>
  );
}
