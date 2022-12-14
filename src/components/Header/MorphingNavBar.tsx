import { NavBar } from "./NavBar";
import { Flex, Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";
import { theme } from "../../theme";

let sentinels;

export const MorphingNavBar = ({ links, active = null, ...props }) => {
	const [isVisible, setVisible] = useState(false);
	const [thisColor, setColor] = useState("white");
	const [thisBackground, setBackground] = useState("rgba(0.1,0.1,0.1,0.1");
	const [thisShadow, setShadow] = useState("none");

	const { colorMode } = useColorMode();
	const bg = theme.bg[colorMode];
	const fg = theme.fg[colorMode];

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setVisible(entry.isIntersecting);
			setColor(entry.isIntersecting ? "white" : fg);
			setBackground(entry.isIntersecting ? "rgba(0.1,0.1,0.1,0.1" : bg);
			setShadow(entry.isIntersecting ? "none" : "md");
		});

		const delay = setTimeout(() => {
			sentinels = document.getElementsByClassName("header-sentinel");

			if (!sentinels) return;

			for (let i = 0; i < sentinels.length; i++) {
				observer.observe(sentinels[i]);
			}
		}, 5000); //Added a delay to give DOM time to render before looking for sentinel

		return () => {
			return clearTimeout(delay);
		};
	});

	return (
		<Box>
			<Box
				top="0"
				as="nav"
				id="nav"
				zIndex="sticky"
				w="100%"
				position={isVisible ? "absolute" : "fixed"}
				color={thisColor}
				bg={thisBackground}
				boxShadow={thisShadow}
				{...props}
			>
				<NavBar links={links} color={props.color} active={active}></NavBar>
			</Box>
		</Box>
	);
};
