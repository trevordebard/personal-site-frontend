import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Image, Flex, Heading, HStack, Link, List, ListItem, Stack, StackItem, Text, Wrap, WrapItem, SimpleGrid, GridItem, Divider, Tag } from "@chakra-ui/react"
import axios, { AxiosResponse } from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import { IProject } from "types"


function Project({ project }: { project: IProject }) {
  return (
    <Box maxW="800px" mx="auto" my={[6, null, 28]} px={4}>
      <Heading size="3xl" textAlign="center">{project.name}</Heading>
      <Divider my={4} />
      <Text fontSize="lg" >{project.description} </Text>
      <Divider my={4} />
      <ProjectInfo project={project} />
      <ProjectImages images={project.demo_images} />
    </Box >
  )
}

function ProjectInfo({ project }: { project: IProject }) {
  return (
    <>
      <Box mb={10}>
        <Box display="block" mb={4}>
          <Heading size="lg" mb={3}>Tech Stack</Heading>
          <Wrap spacing={4}>
            {project.tags.map((tag, i) => (
              <WrapItem key={`${new Date().getTime()}-${i}`}>
                <Tag>{tag.name}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box display="block">
          <Heading size="lg" mb={3}>Links</Heading>
          <List>
            <Link display="block" color="blue.500" href={project.link} isExternal>
              Demo <ExternalLinkIcon mx="2px" />
            </Link>
            <Link color="blue.500" href={project.link} isExternal>
              View the Code <ExternalLinkIcon mx="2px" />
            </Link>
          </List>
        </Box>
      </Box>
    </>
  )
}

function ProjectImages({ images }) {
  return images.map((image, i) => {
    if (!image.image.url) {
      console.log(image)
    }
    const { small, medium, large } = image.image.formats;
    return (
      <SimpleGrid key={i} columns={[1, null, 2]} alignItems="center" spacing={[2, null, 10]} mb={[5, 10]}>
        <Box maxW="md" >
          <Image
            shadow="xl"
            borderRadius="5px"
            src={image.image.url}
            srcSet={`${small.url} ${small.width}w, ${medium.url} ${medium.width}w, ${large.url} ${large.width}w`}
          />
        </Box>
        <Box maxW="sm" key={`imgdesc-${image.id}-${new Date().getTime()}`}>
          {image.description}
        </Box>
      </SimpleGrid>
    )
  })
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: AxiosResponse<IProject[]> = await axios.get(`${process.env.API_URL}/projects`)
  const paths = projects.data.map((project) => ({
    params: { projectId: project.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const project: AxiosResponse<IProject[]> = await axios.get(`${process.env.API_URL}/projects/${context.params.projectId}`)
  return { props: { project: project.data } }
}

export default Project