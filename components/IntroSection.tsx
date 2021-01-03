import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FloatingShapes } from "components/Shapes";

export function Introduction() {
  return (
    <Box color="white" bgGradient="linear(to-b, gray.700, gray.800)">
      <Box position="relative" overflow="hidden">
        <FloatingShapes />
        <Flex minH="100vh" justify="center">
          <Stack zIndex={10} maxW="xl" align="center" justify="center" textAlign="center">
            <Heading size="xl">
              Hi, I'm{" "}
              <Text display="inline-block" color="green.400">
                Trevor DeBardeleben
              </Text>
            </Heading>
            <Box mt="0px">
              <Heading size="sm" display="inline-block" fontWeight="normal">
                A developer in Atlanta, GA
              </Heading>
            </Box>
            <Stack spacing={2} direction="row">
              <Box>Resume</Box>
              <Divider orientation="vertical" />
              <Box>Email</Box>
              <Divider orientation="vertical" />
              <Box>Github</Box>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}


