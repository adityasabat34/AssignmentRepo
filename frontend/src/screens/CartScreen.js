import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  Select,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link as RouterLink,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import Message from '../components/Message';

const CartScreen = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [searchParams] = useSearchParams();
  let qty = searchParams.get('qty');

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, +qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box p={{ base: '4', md: '8' }}>
      <Heading
        as="h2"
        mb={{ base: '4', md: '8' }}
        fontSize={{ base: 'xl', md: '2xl' }}
      >
        Shopping Cart
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }}>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty.{' '}
            <Link as={RouterLink} to="/">
              Go Back
            </Link>
          </Message>
        ) : (
          <Grid
            templateColumns={{ base: '1fr', md: '4fr 2fr' }}
            gap={{ base: '4', md: '8' }}
            w="full"
          >
            <Flex direction="column" border="2px solid black" borderRadius="md">
              {cartItems.map((item) => (
                <Grid
                  key={item.product}
                  size="100%"
                  alignItems="center"
                  justifyContent="space-between"
                  borderBottom="1px"
                  borderColor="gray.200"
                  py="4"
                  px="2"
                  rounded="lg"
                  _hover={{ bgColor: 'gray.50' }}
                  templateColumns="1fr 4fr 2fr 2fr 2fr"
                >
                  {/* Product Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    borderRadius="lg"
                    height="14"
                    width="14"
                    objectFit="cover"
                  />

                  {/* Product Name */}
                  <Text fontWeight="semibold" fontSize="lg">
                    <Link as={RouterLink} to={`/product/${item.product}`}>
                      {item.name}
                    </Link>
                  </Text>

                  {/* Product Price */}
                  <Text fontWeight="semibold" fontSize="lg">
                    ₹{item.price}
                  </Text>

                  {/* Quantity Select Box */}
                  <Select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, +e.target.value))
                    }
                    width="20"
                  >
                    {[...Array(item.countInStock).keys()].map((i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Select>

                  {/* Delete Button */}
                  <Button
                    type="button"
                    colorScheme="red"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    <Icon as={IoTrashBinSharp} />
                  </Button>
                </Grid>
              ))}
            </Flex>

            {/* Second Column */}
            <Flex
              direction="column"
              bgColor="gray.200"
              rounded="md"
              padding="5"
              height="48"
              justifyContent="space-between"
              border="2px solid black"
            >
              <Flex direction="column">
                <Heading as="h2" fontSize="2xl" mb="2">
                  Subtotal (
                  {cartItems.reduce((acc, currVal) => acc + currVal.qty, 0)}{' '}
                  items)
                </Heading>
                <Text fontWeight="bold" fontSize="2xl" color="blue.600" mb="4">
                  ₹
                  {cartItems.reduce(
                    (acc, currVal) => acc + currVal.qty * currVal.price,
                    0
                  )}
                </Text>

                <Button
                  type="button"
                  disabled={cartItems.length === 0}
                  size="lg"
                  colorScheme="teal"
                  bgColor="gray.800"
                >
                  Proceed to checkout
                </Button>
              </Flex>
            </Flex>
          </Grid>
        )}
      </Flex>
    </Box>
  );
};

export default CartScreen;
