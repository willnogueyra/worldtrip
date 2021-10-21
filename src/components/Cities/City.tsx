import { Box, Image, Flex, Heading, Text} from "@chakra-ui/react"

interface CityProps {
  imagem: string;
  pais: string;
  cidade: string;
  bandeira: string;
}

export default function City({imagem, pais, cidade, bandeira}: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden" >
      <Image src={`/paises/${imagem}.jpg`} h="160px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">{cidade}</Heading>
          <Text mr="3" fontSize="md" color="gray.500" fontWeight="500">{pais}</Text>
        </Flex>
        <Image src={`/paises/${bandeira}.png`}w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
      </Flex>
    </Box>
  );
}