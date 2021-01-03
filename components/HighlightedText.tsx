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
  const [splittedText, setSpittedText] = useState(null)
  useEffect(() => {
    setSpittedText(value.split(/(?:\[\[highlight\]\]|\[\[\/highlight\]\]|three)/gi))
  }, [value])
  if (!splittedText) return null;
  return (
    <Text {...props}>{
      splittedText.map((part, i) => {
        if (i % 2 !== 0) {
          return <Text display="inline" color={highlightColor || "teal.500"} fontWeight="bold">{part}</Text>
        }
        return part
      })
    }</Text>
  )
}