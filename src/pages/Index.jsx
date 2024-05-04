import React, { useState } from "react";
import { Container, VStack, FormControl, FormLabel, Input, Button, Heading, useToast, Box, Tab, TabList, TabPanels, TabPanel, Tabs } from "@chakra-ui/react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSignUp = () => {
    // Implement sign-up logic here
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleLogin = () => {
    // Implement login logic here
    toast({
      title: "Login successful.",
      description: "You've successfully logged in.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent p={4}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Sign Up</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Heading>Sign Up</Heading>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button colorScheme="blue" onClick={handleSignUp}>
                Sign Up
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Heading>Login</Heading>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button colorScheme="blue" onClick={handleLogin}>
                Login
              </Button>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Index;
