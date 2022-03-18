import React, { useState, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//chakra-ui
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Image,
  Avatar,
  HStack,
  VStack,
  Icon,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HiViewGrid } from "react-icons/hi";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

//import components

import { Login } from "../";
//etc
import { logout } from "../../actions/userActions";

const links = {
  home: { name: "Home", to: "/" },
  about: { name: "Kenapa Kami?", to: "/whyus" },
  tema: { name: "Tema", to: "#tema" },

  //In-App links
  login: { name: "Login", to: "/auth" },
  logout: { name: "Logout", to: "/logout" },
  profile: { name: "Profile", to: "/profile" },
  dashboard: { name: "Dashboard", to: "/app/dashboard" },
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo, isLogin } = userLogin;

  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gold">
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box className="" onClick={() => navigate("/")}>
            <Image
              className=""
              boxSize="40px"
              src="https://i.ibb.co/wgJD0KF/logo-jauzatu-gold.png"
              alt="Jauzatu"
            />
          </Box>

          <HStack spacing={8} alignItems={"right"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link className="text-white" to={links.home.to}>
                {links.home.name}
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {!userInfo ? (
              <>
                <Button
                  colorScheme="teal"
                  color="white"
                  as={Link}
                  to={links.login.to}
                >
                  {links.login.name}
                </Button>
              </>
            ) : (
              <>
                <Box
                  className="mr-2 sm:hidden"
                  onClick={isOpen ? onClose : onOpen}
                >
                  <Icon w={10} h={10} color="blackAlpha.400" as={HiViewGrid} />
                </Box>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={""} />
                  </MenuButton>
                  <MenuList className="h-auto">
                    <MenuItem as={Link} to={links.dashboard.to}>
                      {links.dashboard.name}
                    </MenuItem>

                    <MenuDivider />
                    <MenuItem
                      onClick={() => {
                        dispatch(logout());
                        navigate("/");
                      }}
                    >
                      {links.logout.name}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={2} mt={2}>
              <Link to={links.home.to}>{links.home.name}</Link>
              <Link to={links.home.to}>{links.home.name}</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
