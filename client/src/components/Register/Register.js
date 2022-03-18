import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { register } from "../../actions/userActions";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CBsFillEnvelopeFill = chakra(BsFillEnvelopeFill);

export default function Register({ setIsRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const navigate = useNavigate();

  console.log(userInfo);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password Do Not Match!");
    } else {
      dispatch(register(name, email, password, pic));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/app/dashboard");
    }
  }, [userInfo]);

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "codeslices");
      data.append("cloud_name", "diztl7cl4");
      fetch("https://api.cloudinary.com/v1_1/diztl7cl4/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image!");
    }
  };

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
        <Heading color="black">Register</Heading>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {/* {message && <ErrorMessage variant="danger">{message}</ErrorMessage>} */}
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
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CBsFillEnvelopeFill color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
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
                    placeholder="Password"
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
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Konfirmasi Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Center>
        <Box>
          Sudah punya akun?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsRegister(false)}
          >
            Login disini.
          </span>
        </Box>
      </Center>
    </Container>
  );
}
