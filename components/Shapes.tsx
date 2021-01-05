import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as React from "react";
const styles = {
  shapeColor: "#718096"
};

const StyledTriangle = styled(motion.li) <{ size: string }>`
  width: 0;
  height: 0;
  border-left: ${(props) => {
    if (props.size === "sm") return "25px solid transparent";
    if (props.size === "md") return "50px solid transparent";
    if (props.size === "lg") return "50px solid transparent";
  }};
  border-right: ${(props) => {
    if (props.size === "sm") return "25px solid transparent";
    if (props.size === "md") return "50px solid transparent";
    if (props.size === "lg") return "50px solid transparent";
  }};
  border-bottom: ${(props) => {
    if (props.size === "sm") return `50px solid ${styles.shapeColor};`;
    if (props.size === "md") return `100px solid ${styles.shapeColor};`;
    if (props.size === "lg") return `100px solid ${styles.shapeColor};`;
  }};

  list-style: none;
  position: absolute;
  display: flex;
  opacity: 0.3;
`;

const StyledCircle = styled(motion.li) <{ size: string }>`
  width: ${(props) => {
    if (props.size === "sm") return "25px";
    if (props.size === "md") return "50px";
    if (props.size === "lg") return "100px";
    return "100px";
  }};
  height: ${(props) => {
    if (props.size === "sm") return "25px";
    if (props.size === "md") return "50px";
    if (props.size === "lg") return "100px";
    return "100px";
  }};
  background: ${styles.shapeColor};
  border-radius: 50%;
  list-style: none;
  position: absolute;
  opacity: 0.3;
`;

export function Triangle({
  left,
  duration,
  delay,
  size,
  ...props
}: ShapeProps) {
  return (
    <StyledTriangle
      {...props}
      animate={{ y: "115vh", rotate: 360 }}
      initial={{ y: -150 }}
      style={{ left }}
      size={size}
      transition={{
        duration: duration,
        delay: delay,
        type: "tween",
        ease: "linear",
        repeat: Infinity
      }}
    />
  );
}

interface ShapeProps {
  left: string;
  duration: number;
  delay: number;
  size: "sm" | "md" | "lg";
}
export function Circle({ left, duration, delay, size, ...props }: ShapeProps) {
  return (
    <StyledCircle
      {...props}
      animate={{
        y: "115vh",
        rotate: -360
      }}
      initial={{ y: -150 }}
      style={{ left }}
      transition={{
        duration: duration,
        delay: delay,
        type: "tween",
        ease: "linear",
        repeat: Infinity
      }}
      size={size}
    />
  );
}

export function FloatingShapes() {
  return (
    <ul>
      <Circle duration={17} delay={0} left="6%" size="sm" />
      <Triangle duration={20} delay={12} left="15%" size="md" />
      <Circle duration={20} delay={5} left="20%" size="lg" />
      <Circle duration={20} delay={15} left="50%" size="md" />
      <Triangle duration={15} delay={6} left="60%" size="sm" />
      <Circle duration={20} delay={10} left="76%" size="sm" />
      <Circle duration={20} delay={0} left="76%" size="md" />
      <Triangle duration={20} delay={4} left="90%" size="sm" />
    </ul>
  );
}
