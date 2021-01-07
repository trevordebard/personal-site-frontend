import { Link, Text } from "@chakra-ui/react";

export function AboutLink({ href, children }) {
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
