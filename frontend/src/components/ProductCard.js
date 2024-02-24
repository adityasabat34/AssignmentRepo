import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: 'none' }}
    >
      <Box
        borderRadius="lg"
        bgColor="white"
        _hover={{ shadow: 'md' }}
        border="2px solid black"
      >
        <Image
          src={product.image}
          alt={product.name}
          w="full"
          h="550px"
          objectFit="fill"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" fontSize="lg" mb="3">
            {product.name}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
