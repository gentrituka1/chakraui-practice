import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box pb="112px" as="section">
      <Box color="#f7fafc" bg="#6b46c1" pt="90px" pb="198px">
        <Heading fontWeight="800" fontSize="48px" textAlign="center">
          Simple pricing for your business
        </Heading>
        <Text fontWeight={500} fontSize="24px" textAlign="center" pt="16px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
