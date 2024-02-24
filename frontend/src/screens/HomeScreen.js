import { Grid, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProductsList } from '../actions/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const producList = useSelector((state) => state.producList);
  const { loading, error, products } = producList;

  useEffect(() => {
    dispatch(allProductsList());
  }, [dispatch]);

  return (
    <>
      <Heading
        as="h2"
        mb={{ base: '6', md: '10' }}
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign="center"
      >
        Our Products
      </Heading>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={{ base: '4', md: '6' }}
          px={{ base: '4', md: '0' }}
        >
          {products.map((prod) => (
            <ProductCard key={prod._id} product={prod} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
