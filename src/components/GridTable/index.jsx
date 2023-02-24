import React from "react";
import { Flex, Box, Tag, GridItem, Grid, Divider } from "@chakra-ui/react";

const GridTable = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} p="12px" fontSize="12px">
        <GridItem color="#4C647A">Vigilancia judicial</GridItem>
        <GridItem color="#223240">1 vigilancia</GridItem>
        <GridItem color="#223240">10 vigilancias</GridItem>
        <GridItem color="#223240" fontWeight="700">
          13/30 vigilancias disponibles
        </GridItem>
        <GridItem color="#223240">80 vigilancias</GridItem>
      </Grid>
      <Divider />
      <Grid templateColumns="repeat(5, 1fr)" gap={6} p="12px" fontSize="12px">
        <GridItem color="#4C647A">Alerta de procesos</GridItem>
        <GridItem color="#223240">1 vigilancia</GridItem>
        <GridItem color="#223240">10 vigilancias</GridItem>
        <GridItem color="#223240" fontWeight="700">
          13/30 vigilancias disponibles
        </GridItem>
        <GridItem color="#223240">80 vigilancias</GridItem>
      </Grid>
      <Divider />
      <Grid templateColumns="repeat(5, 1fr)" gap={6} p="12px" fontSize="12px">
        <GridItem color="#4C647A">Asistencia legal</GridItem>
        <GridItem color="#223240">1 vigilancia</GridItem>
        <GridItem color="#223240">10 vigilancias</GridItem>
        <GridItem color="#223240" fontWeight="700">
          13/30 vigilancias disponibles
        </GridItem>
        <GridItem color="#223240">80 vigilancias</GridItem>
      </Grid>
      <Divider />
      <Grid templateColumns="repeat(5, 1fr)" gap={6} p="12px" fontSize="12px">
        <GridItem color="#4C647A">
          <Flex flexDirection="column">
            <Box display="inline-block">
              <Tag
                borderRadius="full"
                colorScheme="purple"
                color="purple"
                fontSize="11px"
              >
                Próximamente
              </Tag>
            </Box>
            Automatización de documentos
          </Flex>
        </GridItem>
        <GridItem display="flex" alignItems="flex-end" color="#223240">
          1 vigilancia
        </GridItem>
        <GridItem display="flex" alignItems="flex-end" color="#223240">
          10 vigilancias
        </GridItem>
        <GridItem
          display="flex"
          alignItems="flex-end"
          color="#223240"
          fontWeight="700"
        >
          13/30 vigilancias disponibles
        </GridItem>
        <GridItem display="flex" alignItems="flex-end" color="#223240">
          80 vigilancias
        </GridItem>
      </Grid>
      <Divider />

      <Grid templateColumns="repeat(5, 1fr)" gap={6} p="12px" fontSize="12px">
        <GridItem color="#4C647A">Usuarios</GridItem>
        <GridItem color="#223240">1 vigilancia</GridItem>
        <GridItem color="#223240">10 vigilancias</GridItem>
        <GridItem color="#223240" fontWeight="700">
          13/30 vigilancias disponibles
        </GridItem>
        <GridItem color="#223240">80 vigilancias</GridItem>
      </Grid>
      <Divider />
      <Grid templateColumns="repeat(5, 1fr)" gap={6} p="12px" fontSize="12px">
        <GridItem color="#4C647A">Almacenamiento en la nube</GridItem>
        <GridItem color="#223240">1 vigilancia</GridItem>
        <GridItem color="#223240">10 vigilancias</GridItem>
        <GridItem color="#223240" fontWeight="700">
          13/30 vigilancias disponibles
        </GridItem>
        <GridItem color="#223240">80 vigilancias</GridItem>
      </Grid>
    </>
  );
};

export default GridTable;
