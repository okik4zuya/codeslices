import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Login, Register } from "../../components";
import MainBody from "../../components/MainBody";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Flex
      flexDirection="column"
      width="100vw"
      height="100vh"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
      className=""
    >
      {isRegister ? (
        <Register setIsRegister={setIsRegister} />
      ) : (
        <Login setIsRegister={setIsRegister} />
      )}
    </Flex>
  );
}
