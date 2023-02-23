import { Flex, Box, Text, Button, Heading, HStack, StackProps, Icon, Stack } from "@chakra-ui/react";
import CheckIcon from "../icons/CheckIcon"

export function ListItem(props: StackProps){
    const {children, ...rest} = props

    return (
        <HStack as="li" spacing="20px" {...rest}>
            <Icon as={CheckIcon} w="22px" h="22px"/>
            <Text>{children}</Text>
        </HStack>
    )
}

function Pricing() {
  return (
    <Box maxW="994px" margin="auto" mt="-256px" borderRadius="12px" overflow="hidden">
      <Flex>
        <Box bg="#F0EAFB" p="60px">
          <Text fontSize="24px" fontWeight="800">Premium Pro</Text>
          <Heading as="h3" fontSize="60px" mt="16px">$329</Heading>
          <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">Billed just once</Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">Get Started</Button>
        </Box>
        <Box p="60px" fontSize="18px" bg="white" >
            <Text textAlign='left'>Access these features when you get this pricing package for your business.</Text>
            <Stack as="ul" spacing="20px" pt="24px">
                <ListItem>Unlimited access to all features</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
            </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Pricing;
