import { Badge, Box, Heading, Link, Wrap, WrapItem } from "@chakra-ui/react";
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
    <Link href={project.code_link} _hover={{ textDecoration: 'none' }} isExternal _focus={{ outline: 'none' }}>
      <motion.div ref={ref} style={{ textDecoration: 'none', height: '100%' }} variants={variants} initial="hidden" animate={inView ? "visible" : "hidden"} whileHover={{ scale: 1.01 }} {...props}>
        <Box p={6} display="flex" flexDirection="column" minW={75} minHeight={['min-content', 'xs']} overflowY="auto" borderWidth="1px" borderRadius="lg" shadow="md" m={4} cursor="pointer" bg="white" >
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
            <Box as="span" color="gray.600" fontSize="sm">
              {description}
            </Box>
          </Box>
        </Box>
      </motion.div >
    </Link>
  )
}