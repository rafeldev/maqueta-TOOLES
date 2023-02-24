import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Flex, Grid, GridItem, Tag, Text } from "@chakra-ui/react";

const ListItemsPlans = ({ planesItems, changeTitleColor }) => {
  return (
    <>
      <Box pt="24px">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem display="flex" alignItems="center">
            <Flex flexDirection="column" mb="20px">
              <Text fontWeight="600" fontSize="18px">
                Soluciones
              </Text>
              <Text fontSize="11px" color="#7F9BB4">
                El valor de los planes incluyen IVA{" "}
              </Text>
            </Flex>
          </GridItem>
          {planesItems.map((item) => (
            <GridItem key={item.id}>
              <Flex flexDirection="column">
                <Flex justifyContent="space-between">
                  <Text
                    fontWeight="600"
                    fontSize="14px"
                    color={changeTitleColor(item.type)}
                  >
                    {item.name}
                  </Text>
                  {item.isPopular && (
                    <Tag
                      borderRadius="full"
                      colorScheme="red"
                      color="red"
                      fontSize="11px"
                    >
                      Mas popular
                    </Tag>
                  )}
                </Flex>
                <Flex alignItems="flex-end">
                  <Text fontWeight="600" fontSize="24px">
                    {item.price}
                  </Text>
                  <Text fontWeight="600" fontSize="16px" ml="5px" mb="2px">
                    COP mensual
                  </Text>
                </Flex>
                <Text fontSize="11px" color="#7F9BB4" fontWeight="600">
                  {item.priceAnual} COP anual
                </Text>
                <Button
                  color={"bluecito.300"}
                  backgroundColor={item.currentlyPlan ? "bluecito.50" : ""}
                  variant={item.currentlyPlan ? "solid" : "outline"}
                  mt="16px"
                >
                  {item.currentlyPlan ? "Plan actual" : "Seleccionar plan"}
                </Button>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};
ListItemsPlans.propTypes = {
  planesItems: PropTypes.arr,
  changeTitleColor: PropTypes.func,
};

export default ListItemsPlans;
