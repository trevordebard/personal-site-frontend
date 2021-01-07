import { Box, Flex, Heading, Grid, } from "@chakra-ui/react";
import { IProject } from "types";
import { Project } from "./Project";


interface ProjectSectionProps {
  projects: IProject[],
  accent?: boolean
}
export function ProjectsSection({ accent, projects, ...props }: ProjectSectionProps) {

  return (
    <Box py="8" position="relative" {...props} >
      <Box bg="teal.500" position="absolute" left={0} w="300px" />
      { accent && <Box {...props} w={0} h={0} right={0} top={0} zIndex={-1} borderTop={`200px solid #fff`} borderTopColor="teal.500" borderLeft={`200px solid transparent`} position="absolute" />}

      <Flex maxW="6xl" mx="auto" justify="center" direction="column" align="center">
        <Heading as="h2" color="green">Projects</Heading>
        <Grid w="100%" templateColumns="repeat(auto-fit, minmax(300px, 1fr))">
          {projects.map((project, i) => {
            return (
              <Project project={project} key={`${project.name}-${i}-${new Date().getTime()}`} />
            )
          })}
        </Grid>
      </Flex>
    </Box >
  )
}

