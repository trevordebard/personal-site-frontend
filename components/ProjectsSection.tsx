import { Box, Flex, Heading, Badge, Grid, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IProject } from "types";


interface ProjectSectionProps {
  projects: IProject[],
  accent?: boolean
}
export function ProjectsSection({ accent, projects, ...props }: ProjectSectionProps) {

  return (
    <Box as="section" py="8" position="relative" {...props} >
      <Box bg="teal.500" position="absolute" left={0} w="300px" />
      { accent && <Box {...props} w={0} h={0} right={0} top={0} zIndex={-1} borderTop={`200px solid #fff`} borderTopColor="teal.500" borderLeft={`200px solid transparent`} position="absolute" />}

      <Flex maxW="6xl" mx="auto" justify="center" direction="column" align="center">
        <Heading as="h2" color="green">Projects</Heading>
        <Grid w="100%" templateColumns="repeat(auto-fit, minmax(300px, 1fr))">
          {projects.map(project => {
            return (
              <>
                <Project project={project} />
              </>
            )
          })}
        </Grid>

      </Flex>
    </Box >
  )
}


interface ProjectProps {
  project: IProject
}

function Project({ project, ...props }: ProjectProps) {
  const { description, name, previewImg } = project
  return (
    <motion.div whileHover={{ scale: 1.01 }} {...props}>
      <Box minW={75} h="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md" m={4} cursor="pointer" bg="white" >
        <Box p="6">
          <Heading mb={2}>{name}</Heading>
          <Wrap>
            <WrapItem>
              <Badge textTransform="none" borderRadius="full" px="2" colorScheme="gray">
                Next.js
            </Badge>
            </WrapItem>
            <WrapItem>
              <Badge textTransform="none" borderRadius="full" px="2" colorScheme="gray">
                JavaScript (ES6)
            </Badge>
            </WrapItem>
            <WrapItem>
              <Badge textTransform="none" borderRadius="full" px="2" colorScheme="gray" >
                React.js
            </Badge>
            </WrapItem>
          </Wrap>

          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {description}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}