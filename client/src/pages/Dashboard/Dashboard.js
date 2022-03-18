import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  GridItem,
  Center,
  Flex,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { SIDE_MENU } from "../../constants/layoutConstants";
import { set } from "../../actions/layoutActions";

import {
  Overview,
  PilihTema,
  EditAcara,
  EditMempelai,
  EditTeks,
  Profil,
  InfoPaket,
  SideMenu,
  SideMenuItem,
} from "../../components";

export default function Dashboard() {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { active, showSideMenu } = layout;

  return (
    <Center className="" backgroundColor="gray.100">
      <Flex className=" w-full md:w-2/3 min-h-screen ">
        <div className="w-[200px] ml-[10px] mt-[90px] hidden sm:block  ">
          <SideMenu />
        </div>

        <div className="bg-white p-4 h-full md:w-[50vw] w-[100vw] md:ml-[20px] mx-[10px] mt-[90px] rounded-xl shadow-xl">
          {active === "Overview" && <Overview />}
          {active === "Pilih Tema" && <PilihTema />}
          {active === "Edit Mempelai" && <EditMempelai />}
          {active === "Edit Acara" && <EditAcara />}
          {active === "Edit Teks" && <EditTeks />}
          {active === "Info Paket" && <InfoPaket />}
          {active === "Profil" && <Profil />}
        </div>
      </Flex>
    </Center>
  );
}
