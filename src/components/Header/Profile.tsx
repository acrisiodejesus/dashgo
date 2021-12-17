import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Acrísio de Jesus</Text>
            <Text color="gray.300" fontSize="small">
              acrisiodejesus@gmail.com
            </Text>
          </Box>
        )
      }
      <Avatar size="md" name="Acrísio de Jesus" src="https://github.com/acrisiodejesus.png" />
    </Flex>
  )
}