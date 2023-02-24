import React from "react";
import {
  Avatar,
  Divider,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { VscBellDot } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";

import LogoPNG from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <Flex
        borderBottom="1px solid"
        borderColor="gray.200"
        p="1rem 25px"
        w="100%"
        h="64px"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Image src={LogoPNG} alt="Logo" w="100px" h="24px" />
          <Stack direction="row" h="64px" p={4} alignItems="center">
            <Divider orientation="vertical" />
            <Text
              color="#1D2F68"
              fontWeight="600"
              fontSize="14px"
              lineHeight="24px"
            >
              Gestion de mi plan
            </Text>
          </Stack>
        </Flex>
        <Flex alignItems="center">
          <Icon as={FiSearch} w={6} h={6} color="#1D2F68" />
          <Icon as={VscBellDot} w={6} h={6} color="#1D2F68" m="0 30px" />
          <Flex flexDirection="column" textAlign="right" mr="16px">
            <Text
              color="#1D2F68"
              fontWeight="600"
              fontSize="14px"
              lineHeight="24px"
            >
              Jason Doe
            </Text>
            <Text
              color="#9DB8D1"
              fontWeight="600"
              fontSize="14px"
              lineHeight="24px"
            >
              Rol
            </Text>
          </Flex>
          <WrapItem h="auto" w="auto">
            <Avatar
              size="md"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
