import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image,
  Center,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { login } from "../../actions/userActions";
import { ErrorMessage, Loading } from "../";

const CBsFillEnvelopeFill = chakra(BsFillEnvelopeFill);
const CFaLock = chakra(FaLock);

export default function AuthPage({ setIsRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo, isLogin } = userLogin;

  console.log(userInfo);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/app/dashboard");
    }
  }, [isLogin]);

  return (
    <Container>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          boxSize="40px"
          src="https://i.ibb.co/wgJD0KF/logo-jauzatu-gold.png"
        />
        <Heading color="black">Login</Heading>
        {error && (
          <ErrorMessage status="error" title="">
            {error}
          </ErrorMessage>
        )}
        {loading && <Loading />}
        <Box minW={{ base: "90%", md: "400px" }}>
          <form onSubmit={submitHandler}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CBsFillEnvelopeFill color="gray.300" />}
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                bg="gold"
                color="white"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Center>
        <Box>
          Belum punya akun?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsRegister(true)}
          >
            Daftar disini.
          </span>
        </Box>
      </Center>
    </Container>
  );
}
