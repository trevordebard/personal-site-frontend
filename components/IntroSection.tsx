import {
  Box,
  Divider,
  Flex,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FloatingShapes } from "components/Shapes";
import { motion } from "framer-motion";
import { IAbout } from "types";
import { HighlightedText } from "./HighlightedText";

interface IntroductionProps {
  about: IAbout
}
const MotionBox = motion.custom(Box)
const MotionStack = motion.custom(Stack)

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1
    }
  },
  hidden: {
    opacity: 0,
    x: -100
  },
}

export function Introduction({ about }: IntroductionProps) {
  return (
    <Box color="white" bgGradient="linear(to-b, gray.700, gray.800)">
      <Box position="relative" overflow="hidden">
        <FloatingShapes />
        <Flex minH="100vh" justify="center">
          <MotionStack variants={variants} initial="hidden" animate="visible" zIndex={10} align="center" justify="center" textAlign="center">
            <MotionBox variants={variants}>
              <HighlightedText value={about.greeting} highlightColor="green.400" fontSize={["3xl", "4xl", "5xl"]} />
            </MotionBox>
            <MotionBox variants={variants}>
              <Text>{about.subgreeting}</Text>
            </MotionBox>
            <MotionStack variants={variants} spacing={2} direction="row">
              <AboutLink href={about.resume.url}>Resume</AboutLink>
              < Divider orientation="vertical" />
              <AboutLink href={"mailto:trevordebard@gmail.com"}>Email</AboutLink>
              <Divider orientation="vertical" />
              <AboutLink href="https://github.com/trevordebard">GitHub</AboutLink>
            </MotionStack>
          </MotionStack>
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

