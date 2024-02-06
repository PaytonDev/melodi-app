import { Box, Flex, Input, Button, Link, Collapse, useDisclosure, Text } from "@chakra-ui/react";
import { useState } from "react";

export const LoginField = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const { isOpen, onToggle } = useDisclosure();

  const { email, password, firstName, lastName } = loginInfo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <Box p={8} borderRadius="md" maxW="500px">
      <Text fontSize="3xl" fontWeight="bold" mb="8" textAlign={"center"}>
        {!isOpen ? "Login" : "Sign Up"}
      </Text>
      <Collapse in={isOpen} animateOpacity transition={{ exit: { duration: 0.75 } }}>
        {isOpen && (
          <>
            <Input
              placeholder="First Name"
              mb="4"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            <Input
              placeholder="Last Name"
              mb="4"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </>
        )}
      </Collapse>
      <Input placeholder="Email" mb="4" value={email} name={email} onChange={handleChange} />
      <Input
        placeholder="Password"
        mb="4"
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <Flex direction="row" justify="space-between" align="center">
        <Button onClick={handleLogin}>{!isOpen ? "Login" : "Sign Up"}</Button>
        <Link fontSize="sm" mr="2" onClick={onToggle}>
          {!isOpen ? "Need to sign up?" : "Logging in?"}
        </Link>
      </Flex>
    </Box>
  );
};
