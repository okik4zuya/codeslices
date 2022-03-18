import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import MainBody from "../../components/MainBody";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  console.log(userInfo);

  return (
    <Container>
      {error && (
        <ErrorMessage status="error" title="">
          {error}
        </ErrorMessage>
      )}
      {loading && <Loading />}
      <form onSubmit={submitHandler}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
      <Box className="py-3">
        <Box>
          New Customer ? <Link to="/register">Register Here</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
