import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Center,
  Box,
  Image,
  Avatar,
  VStack,
  Badge,
  Button,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";
import { FrameDashboard } from "../../";
import { BuatUndangan } from "../../";
import InfoUndangan from "../InfoUndangan/InfoUndangan";

export default function Overview() {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { isCreated, active } = layout;

  const screen = window.screen.width;
  return (
    <>
      <FrameDashboard title="Overview">
        <Flex direction={`${screen <= 1200 ? "column" : "row"}`}>
          <div
            className={` h-[160px] bg-yellow-200 rounded-lg shadow-md w-full sm:w-[49%] mb-2 "
            }`}
          >
            <Center>
              <VStack>
                <div className="relative top-6">
                  <Avatar size={"md"} src={""} />
                </div>
                <div className="relative top-6 text-center">duck@duck.go</div>
                <div className="relative top-6 text-center">
                  <Badge variant="outline" colorScheme="green">
                    Akun: Gold
                  </Badge>
                </div>
              </VStack>
            </Center>
          </div>
          <Spacer />
          <div
            className={`bg-white shadow-md rounded-lg h-[160px] w-full sm:w-[49%] text-sm p-1 "
            }`}
          >
            <Center>
              <VStack>
                <div className="w-3/4 relative top-4 text-center ">
                  Saat ini anda berada dalam paket Silver. Untuk upgrade akun
                  silahkan hubungi kami.
                </div>
                <div className="relative top-4">
                  <ButtonGroup>
                    <Button size="sm">Info Paket</Button>
                    <Button size="sm" bg={"gold"} color={"white"}>
                      Upgrade
                    </Button>
                  </ButtonGroup>
                </div>
              </VStack>
            </Center>
          </div>
        </Flex>
        {isCreated ? <InfoUndangan /> : <BuatUndangan />}
      </FrameDashboard>
    </>
  );
}
