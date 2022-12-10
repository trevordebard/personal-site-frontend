
import { Box, Flex, Heading } from "@chakra-ui/react";
import { IJob } from "types";
import { Job } from 'components/Experience/Job'

export function ExperienceSection({ jobs, ...props }: { jobs: IJob[] }) {

  return (
    <Box py="8" position="relative" {...props} >
      <Flex maxW="6xl" mx="auto" direction="column">
        <Box bg="teal.500" position="absolute" left={0} w="300px" />
        <Heading as="h2" textAlign="center">Experience</Heading>
        {jobs.map(job => <Job job={job} key={`${job.id}-${new Date().getTime()}`} />)}
      </Flex>
    </Box >
  )
}
