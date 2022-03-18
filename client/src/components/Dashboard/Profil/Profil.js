import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { FrameDashboard } from "../../";

export default function Profil() {
  return (
    <>
      <FrameDashboard title="Profil">
        <Container className="mt-[40px]">
          <form>
            <VStack spacing="20px">
              <FormControl>
                <FormLabel>Nama</FormLabel>
                <Input placeholder="Nama" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Email" />
              </FormControl>
              <FormControl>
                <FormLabel>Password Baru</FormLabel>
                <Input placeholder="Password Baru" />
              </FormControl>
              <FormControl>
                <FormLabel>Konfirmasi Password Baru</FormLabel>
                <Input placeholder="Konfirmasi Password Baru" />
              </FormControl>
              <FormControl>
                <FormLabel>Upload Gambar Profil</FormLabel>
                <Input type="file" placeholder="file" />
              </FormControl>
              <Center>
                <Button type="submit" variant="primary" bg="gold" color="white">
                  Update Profil
                </Button>
              </Center>
            </VStack>
          </form>
        </Container>
      </FrameDashboard>
    </>
  );
}
