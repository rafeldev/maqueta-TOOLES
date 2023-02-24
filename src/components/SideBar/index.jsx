import {
  Box,
  Flex,
  Text,
  // Container,
  Button,
  WrapItem,
  Avatar,
  Divider,
  Icon,
  Alert,
  Progress,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { MdOutlineDashboard } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FiHeadphones, FiCloud } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";
import { RiShoppingBag3Line, RiQuestionLine } from "react-icons/ri";

import React from "react";

import "./styles.css";

const SideBar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: MdOutlineDashboard,
    },
    {
      id: 2,
      name: "Vigilancia judicial",
      icon: GiMagnifyingGlass,
    },
    {
      id: 3,
      name: "Asistencia legal",
      icon: FiHeadphones,
    },
    {
      id: 4,
      name: "Tracking de procesos",
      icon: VscBellDot,
    },
  ];

  return (
    <Box
      maxW="20%"
      minW="20%"
      p="0"
      w={{ base: "20%", md: "20%", lg: "20%", xl: "20%" }}
    >
      <Flex
        borderColor="gray.200"
        height="100vh"
        flexDirection="column"
        backgroundColor="#F8FCFF"
      >
        <Box bgColor="#243273" h="160px" p="10px 10px">
          <Flex justifyContent="flex-end">
            <Button
              backgroundColor="white"
              p="0"
              w={["12px", "24px"]}
              h="24px"
              opacity=".5"
            >
              <CloseIcon w={["10px", "12px"]} h="12px" color="black" />
            </Button>
          </Flex>
          <Flex flexDirection="column" textAlign="center" mt="24px">
            <Text fontSize="16px" color="#5FEEC8" as="b">
              Jason Doe
            </Text>
            <Text fontSize="12px" color="#5FEEC8">
              jason-180@mailserver.com
            </Text>
          </Flex>
        </Box>
        <Box position="relative" top="-2%" left="44%">
          <WrapItem position="absolute" h="auto" w="auto">
            <Avatar
              size="md"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
        </Box>
        <Box p="20% 6% 5% 6%">
          <Text fontSize="14px" color="#bbc9d6" fontWeight="500" mb="5px">
            MENÚ
          </Text>
          <Divider />
        </Box>
        <Box p="0 6%">
          {menuItems.map((menu) => (
            <Flex
              alignItems="center"
              mb={8}
              _last={{ marginBottom: 4 }}
              key={menu.id}
            >
              <Icon as={menu.icon} color="#374058" w={7} h={7} />
              <Text pl={4} fontSize="18px" color="#374058" fontWeight="500">
                {menu.name}
              </Text>
            </Flex>
          ))}
        </Box>
        <Box p="0 6%" display="inline-block">
          <Alert
            color="red"
            borderRadius={50}
            p={1}
            status="error"
            display="inline-block"
          >
            <Text fontWeight="500" fontSize="14px">
              Recuerda configurar este servicio
            </Text>
          </Alert>
        </Box>
        <Box p="5% 6%">
          <Button
            justifyContent="flex-start"
            backgroundColor="#DAE3FF"
            color="#1D2F68"
            variant="solid"
            w="100%"
            p="20px 10px"
          >
            <Icon as={RiShoppingBag3Line} mr="5px" w={6} h={6} />
            Gestion de mi plan
          </Button>
        </Box>
        <Divider />
        <Box p="10% 6% 5% 6%">
          <Flex alignItems="center" mb={8}>
            <Icon as={FiCloud} color="#374058" w={7} h={7} />
            <Text pl={4} fontSize="18px" color="#374058" fontWeight="500">
              Almacenamiento
            </Text>
          </Flex>
          <Progress
            borderRadius={50}
            colorScheme="teal"
            backgroundColor="teal.200"
            value={30}
          />
          <Text pt="2" pb={4} fontSize="14px" color="#525b82" fontWeight="500">
            0.5 GB de 5 GB utilizado(s)
          </Text>
          <Button
            w="100%"
            p="15px"
            variant="outline"
            border="2px solid #525b82"
          >
            Actualizar plan
          </Button>
        </Box>
        <Box position="fixed" w="20%" bottom={0} marginBottom={10}>
          <Divider colorScheme="blue" />
          <Flex alignItems="center" mb={4} p="10% 5% 0 5%">
            <Icon as={RiQuestionLine} color="#374058" w={7} h={7} />
            <Text pl={4} fontSize="18px" color="#374058" fontWeight="500">
              Recurso de ayuda
            </Text>
          </Flex>
          <Text pl={4} fontSize="12px" color="#374058" fontWeight="500">
            Powered by <b>TOOLES ©</b>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideBar;
