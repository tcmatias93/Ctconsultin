import Link from "next/link";
import {
  Image,
  Container,
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Center,
} from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="4"
      marginInlineEnd="20"
      marginInlineStart="20"
    >
      <Box>
        <Heading size="md">
          <Image
            boxSize="100px"
            objectFit="cover"
            src="/images/CTConsultoria.png"
            alt="Logo"
          />
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="3">
        <Button colorScheme="purple">
          <Link href={"/"}>
            <a>Inicio</a>
          </Link>
        </Button>
        <Button colorScheme="purple">
          <Link href={"/clientes"}>
            <a>Clientes</a>
          </Link>
        </Button>
        <Button colorScheme="purple">
          <Link href={"/objetivo"}>
            <a>Objetivo</a>
          </Link>
        </Button>
        <Button colorScheme="purple">
          <Link href={"/servicios"}>
            <a>Servicios</a>
          </Link>
        </Button>
        <Button colorScheme="purple">
          <Link href={"/contactanos"}>
            <a>Contactanos</a>
          </Link>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Nav;
