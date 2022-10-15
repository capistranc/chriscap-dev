import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { MotionFlex, MotionBox } from "./index";
import { useOnScreen, useHasRendered } from "../../lib/hooks";
import { slideFrom } from "./variants";

export const SlideIn = ({ children, from = "left", ...props }) => {
  const ref = useRef();
  const isVisible = useHasRendered(ref);

  return (
    <Box ref={ref} {...props} overflow="hidden">
      {isVisible && (
        <MotionBox
          h="100%"
          w="100%"
          variants={slideFrom(from)}
          initial="hidden"
          animate="show"
          transition={{
            duration: 0.5,
            delay: 0.3 * props.delay,
            stiffness: 500,
          }}
        >
          {children}
        </MotionBox>
      )}
    </Box>
  );
};
