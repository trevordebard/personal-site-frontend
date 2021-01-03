import {
  Box,
  Divider,
  Flex,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FloatingShapes } from "components/Shapes";
import { IAbout } from "types";
import { HighlightedText } from "./HighlightedText";

interface IntroductionProps {
  about: IAbout
}
export function Introduction({ about }: IntroductionProps) {
  return (
    <Box minH="100vh" minHeight="calc(var(--vh, 1vh) * 100)" color="white" bgGradient="linear(to-b, gray.700, gray.800)">
      <Box position="relative" overflow="hidden">
        <FloatingShapes />
        <Flex minH="100vh" minHeight="calc(var(--vh, 1vh) * 100)" justify="center">
          <Stack zIndex={10} align="center" justify="center" textAlign="center">
            <HighlightedText value={about.greeting} highlightColor="green.400" fontSize={["3xl", "4xl", "5xl"]} />
            <Box mt="0px">
              <HighlightedText value={about.subgreeting} highlightColor="green.400" fontSize={["md", "xl"]} />
            </Box>
            <Stack spacing={2} direction="row">
              <Link href={about.resume.url}><Text>Resume</Text></Link>
              <Divider orientation="vertical" />
              <Box><Text>Email</Text></Box>
              <Divider orientation="vertical" />
              <Box><Text>Github</Text></Box>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}


