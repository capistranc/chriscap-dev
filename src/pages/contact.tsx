import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";

import { theme } from "../theme";
import React, { useRef, useEffect, useState } from "react";

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Spacer,
  useColorMode,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";

import { MdHeadsetMic } from "react-icons/md";
import {
  DiamondDecoratorTopDown,
  DiamondDecoratorBottomUp,
} from "../components/Decorators";

export const ContactPage: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout title="Contact Us" description="Contact Form">
      Contact
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactPage;
