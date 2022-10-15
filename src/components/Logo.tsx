import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export function Logo(props) {
	return (
		<Box {...props}>
			<NextLink href="/">
				<Button as="a" variant="ghost" {...props}>
					<Text fontSize="lg" fontWeight="bold">
						chriscap.dev
					</Text>
				</Button>
			</NextLink>
		</Box>
	);
}
