import { Badge, Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IProject } from "types";

interface ProjectProps {
  project: IProject
}

const variants = {
  visible: { opacity: 1, y: 0, transition: { delay: .1 } },
  hidden: { opacity: 0, y: 50 },
}

export function Project({ project, ...props }: ProjectProps) {
  const { description, name, tags } = project
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "visible" : "hidden"} whileHover={{ scale: 1.01 }} {...props}>
      <Box minW={75} h="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md" m={4} cursor="pointer" bg="white" >
        <Box p="6">
          <Heading mb={2}>{name}</Heading>
          <Wrap>
            {tags.map((tag, i) => (
              <WrapItem key={`tag-${i}-${new Date().getTime()}`}>
                <Badge textTransform="none" borderRadius="full" px="2" colorScheme="gray">
                  {tag.name}
                </Badge>
              </WrapItem>
            ))}
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