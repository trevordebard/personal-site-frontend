
import { Box, Flex, Heading, Stack, List, ListIcon, ListItem, Text, Divider, SimpleGrid, TextProps, ColorProps } from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons'
import { IJob } from "types";
import { HighlightedText } from 'components/HighlightedText'


export function ExperienceSection({ jobs, ...props }: { jobs: IJob[] }) {

  return (
    <Box py="8" position="relative" {...props} >
      <Flex maxW="6xl" mx="auto" direction="column">
        <Box bg="teal.500" position="absolute" left={0} w="300px" />
        <Heading as="h2" textAlign="center" color="green">Experience</Heading>
        {jobs.map(job => <Job job={job} key={job.id} />)}
      </Flex>
    </Box >
  )
}
function Job({ job }: { job: IJob }) {
  return (
    <>
      <Box mx="auto" paddingX={10} mb={5} maxW="100%">
        <Flex w="md" direction="column" width="100%">
          <Box>
            <Heading size="lg">{job.title}</Heading>
            <Heading size="sm">{job.company}</Heading>
          </Box>
        </Flex>
        <SimpleGrid columns={[1, null, 2]} spacing="10px">
          <Box maxW="md">
            <Text mb={2} color="gray.500" alignSelf="baseline" fontSize="sm">{`${job.start_date} - ${job.end_date}`}</Text>
            <HighlightedText highlightColor="red.500" value={job.description} fontSize="sm" color="gray.500" />
          </Box>
          <Box maxW="xl">
            <List>
              {job.bullets && job.bullets.data.map(bullet => {
                return (
                  <ListItem >
                    <ListIcon as={CheckIcon} color="green.500" />
                    <HighlightedText value={bullet} display="inline" fontSize="sm" color="gray.700" />
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  )
}
