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
    <Box color="white" bgGradient="linear(to-b, gray.700, gray.800)">
      <Box position="relative" overflow="hidden">
        <FloatingShapes />
        <Flex minH="100vh" justify="center">
          <Stack zIndex={10} align="center" justify="center" textAlign="center">
            <HighlightedText value={about.greeting} highlightColor="green.400" fontSize={["3xl", "4xl", "5xl"]} />
            <Box mt="0px">
              <HighlightedText value={about.subgreeting} highlightColor="green.400" fontSize={["md", "xl"]} />
            </Box>
            <Stack spacing={2} direction="row">
              <AboutLink href={about.resume.url}>Resume</AboutLink>
              < Divider orientation="vertical" />
              <AboutLink href={"mailto:trevordebard@gmail.com"}>Email</AboutLink>
              <Divider orientation="vertical" />
              <AboutLink href="">GitHub</AboutLink>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}

function AboutLink({ href, children }) {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={href}
      _after={{
        content: '""', width: "100%", height: "1px", marginTop: "2px", display: "block", background: "yellow.500",
        _hover: {
        }
      }}
      _hover={{
        textDecoration: "none",
        _after: {
          content: '""', width: "100%", height: "2px", marginTop: "2px", display: "block", background: "yellow.500"
        },
        color: "yellow.500"
      }}
    >
      <Text>{children}</Text>
    </Link>
  )
}

