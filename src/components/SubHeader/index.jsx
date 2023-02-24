import { Alert, Box, Flex, Switch, Text } from "@chakra-ui/react";
import React from "react";
import MainSection from "../MainSection";

const SubHeader = () => {
  return (
    <>
      <Box backgroundColor="#F3F6FF" /* h="272px" */>
        <Flex justifyContent="flex-end" p="24px">
          <Box color="#A5BAFD" fontWeight="500">
            Mié 27 de jul. 9:43 am
          </Box>
        </Flex>
        <Flex
          justifyContent="flex-start"
          flexDirection="column"
          p="32px 32px 48px 32px"
        >
          <Text fontSize="24px" fontWeight="700" color="#1D2F68">
            ¡Hola Jason!
          </Text>
          <Text fontSize="18px" fontWeight="400" color="#1D2F68" mb="10px">
            Actualiza tu plan vigpro para obtener mejores beneficios
          </Text>
          <Flex
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              <Alert
                color="#30AA8A"
                borderRadius={50}
                p={1}
                backgroundColor="#CDFFF2"
                display="inline-block"
              >
                <Text fontWeight="600" fontSize="14px" p="0 5px">
                  Plan premium · Este plan vence en 364 días
                </Text>
              </Alert>
            </Box>
            <Flex justifyContent="flex-end" mb="108px">
              <Flex alignItems="center">
                <Text fontWeight="700" mr="10px" color="#223240">
                  Renovación automática
                </Text>
                <Switch colorScheme="bluecito" mr="10px" />
                <Text fontWeight="600" fontSize="16px" color="#BDD7EF">
                  Renovación manual
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <MainSection />
    </>
  );
};

export default SubHeader;
