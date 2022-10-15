import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Spacer,
  useColorMode,
  SimpleGrid,
} from "@chakra-ui/react";

export const About: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout
      title="About Us"
      description="Learn about the team at West End Designs"
    >
      About Us
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
