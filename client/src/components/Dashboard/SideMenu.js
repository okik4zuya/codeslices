import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  GridItem,
  Center,
  Flex,
  VStack,
  Square,
} from "@chakra-ui/react";
import { SideMenuItem } from "../";
import { HiHome, HiTemplate, HiDocumentText } from "react-icons/hi";
import {
  FaChevronRight,
  FaChevronLeft,
  FaUserAlt,
  FaEdit,
  FaHeartbeat,
  FaCalendarCheck,
  FaGem,
} from "react-icons/fa";
import { SHOW_SIDE_MENU } from "../../constants/layoutConstants";
import { set } from "../../actions/layoutActions";

export default function SideMenu() {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { showSideMenu, active } = layout;

  const [expandEditUndangan, setExpandEditUndangan] = useState(true);

  return (
    <Flex
      className="px-2 py-2 bg-white sm:rounded-lg sm:shadow-lg "
      flexDirection="column"
    >
      <SideMenuItem title="Overview">
        <HiHome size="20px" boxSize="30px" />
      </SideMenuItem>
      <div
        className="pointer-events-none"
        onClick={() => setExpandEditUndangan(!expandEditUndangan)}
      >
        <SideMenuItem as={"div"} title="Edit Undangan">
          <FaEdit size="20px" boxSize="30px" />
        </SideMenuItem>
      </div>

      <Flex className={`px-3 `} flexDirection="column">
        <SideMenuItem title="Pilih Tema">
          <HiTemplate size="20px" boxSize="30px" />
        </SideMenuItem>
        <SideMenuItem title="Edit Mempelai">
          <FaHeartbeat size="20px" boxSize="30px" />
        </SideMenuItem>
        <SideMenuItem title="Edit Acara">
          <FaCalendarCheck size="20px" boxSize="30px" />
        </SideMenuItem>
        <SideMenuItem title="Edit Teks">
          <HiDocumentText size="20px" boxSize="30px" />
        </SideMenuItem>
      </Flex>

      <SideMenuItem title="Info Paket">
        <FaGem size="20px" boxSize="30px" />
      </SideMenuItem>

      <SideMenuItem title="Profil">
        <FaUserAlt size="20px" boxSize="30px" />
      </SideMenuItem>
    </Flex>
  );
}
