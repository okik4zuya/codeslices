import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import { SHOW_SIDE_MENU } from "../../constants/layoutConstants";
import { set } from "../../actions/layoutActions";
import DashboardDrawer from "./DashboardDrawer";
import { SideMenu } from "../";

export default function FrameDashboard({ children, title }) {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { showSideMenu, active } = layout;

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Flex>
        <div
          className="sm:hidden text-center w-[70px] py-2 text-white bg-gold rounded-lg font-bold text-xl shadow-md"
          onClick={() => setOpenMenu(true)}
        >
          Menu
        </div>
        <DashboardDrawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Spacer />

        <div className="text-center sm:w-full w-3/4 py-2 text-white bg-gold rounded-lg font-bold text-xl shadow-md">
          {title}
        </div>
      </Flex>

      <div className="mt-2">{children}</div>
    </>
  );
}
