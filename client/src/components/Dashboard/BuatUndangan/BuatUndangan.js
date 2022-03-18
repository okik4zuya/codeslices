import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Container,
  Center,
  useDisclosure,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { setIsCreated, setActive } from "../../../actions/layoutActions";

export default function BuatUndangan() {
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { isCreated, active } = layout;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIsCreated(true));
  };

  return (
    <div className="mt-2 bg-gold shadow-lg rounded-lg p-2 w-full h-[200px]">
      <div className="text-center text-white font-bold text-xl py-2">
        Buat Undangan
      </div>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input
              id="slug"
              placeholder="Masukan slug..."
              bg="white"
              className="text-center"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
              }}
            />
          </FormControl>

          <Center>
            <Button mt={4} colorScheme="teal" type="submit">
              Buat
            </Button>
          </Center>
        </form>
      </Container>
    </div>
  );
}
