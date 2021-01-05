import { Text, TextProps } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface HightedTextProps extends TextProps {
  value: string,
  highlightColor?: string
}

/**
 * Pass in string of text as the value and this component will replace text
 * between [[highlight]] and [[/highlight]] tags with a highlighted text component.
 * 
 * Example:
 * "Let's get to [[highlight]]work[[/highlight]]"
 * The string of text above would return a Chakra UI Text components and the word "work" would be bold and colored
 */
export function HighlightedText({ value, highlightColor, ...props }: HightedTextProps) {
  // Split word everywhere [[highlight]] or [[/highlight]] is
  let valueAsArray = value.split(/(?:\[\[highlight\]\]|\[\[\/highlight\]\])/gi)

  return (
    <Text {...props}>{
      valueAsArray.map((part, i) => {
        // Every odd value will be the text that should be highlighted 
        if (i % 2 !== 0) {
          return <Text as="span" key={`highlight-${i}-${new Date().getTime()}`} display="inline" color={highlightColor || "teal.500"} fontWeight="bold">{part}</Text>
        }
        return part
      })
    }</Text>
  )
}