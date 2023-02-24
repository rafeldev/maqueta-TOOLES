import {
  Flex,
  Container,
  Box,
  Text,
  Tag,
  Alert,
  AlertIcon,
  Divider,
} from "@chakra-ui/react";
import React from "react";

import "./styles.css";
import ListItemsPlans from "../ListItemsPlans";
import GridTable from "../GridTable";

const MainSection = () => {
  const planesItems = [
    {
      id: 1,
      name: "Plan demo",
      price: "0,00",
      priceAnual: "0,00",
      isPopular: false,
      type: "standar",
      currentlyPlan: false,
    },
    {
      id: 2,
      name: "Plan estándar",
      price: "190.000",
      priceAnual: "2’280.000",
      isPopular: false,
      type: "standar",
      currentlyPlan: false,
    },
    {
      id: 3,
      name: "Plan plus",
      price: "426.166",
      priceAnual: "5’090.000",
      isPopular: true,
      type: "plus",
      currentlyPlan: true,
    },
    {
      id: 4,
      name: "Plan premium",
      price: "620.000",
      priceAnual: "9’980.000",
      isPopular: false,
      type: "premium",
      currentlyPlan: false,
    },
  ];

  function changeTitleColor(params) {
    let color = "";
    if (params === "standar") {
      color = "#9328C7";
    } else if (params === "plus") {
      color = "#45CCA9";
    } else {
      color = "#4760AC";
    }
    return color;
  }

  return (
    <Container
      position="absolute"
      top="27%"
      maxW="xl lg md"
      // height="80%"
      w="80%"
    >
      <Box
        h="60%"
        backgroundColor="white"
        boxShadow="md"
        borderRadius="10px"
        p="24px"
      >
        <Flex alignItems="center">
          <Text mr="8px" fontWeight="600">
            Selecciona la modalidad de pago
          </Text>
          <Tag mr="8px" borderRadius="full" backgroundColor="#5FEEC8" p="8px">
            Anual
          </Tag>
          <Tag
            borderRadius="full"
            variant="outline"
            p="8px"
            // color="#45CCA9"
            colorScheme="bluecito"
          >
            Mensual
          </Tag>
        </Flex>
        <Alert
          status="info"
          mt="20px"
          backgroundColor="#F3F6FF"
          border="1px solid #4760AC"
          borderRadius="10px"
          color="#4760AC"
        >
          <AlertIcon color="#4760AC" />
          En el plan actual, puedes ver un resumen del consumo de tu plan. Si
          quieres ver una mejor visualización de tu plan te invitamos a ver el
          Dashboard
        </Alert>
        <ListItemsPlans
          planesItems={planesItems}
          changeTitleColor={changeTitleColor}
        />
        <Divider mt="34px" pb="12px" />
        <GridTable />
        <Divider mb="116px" />
      </Box>
    </Container>
  );
};

export default MainSection;
