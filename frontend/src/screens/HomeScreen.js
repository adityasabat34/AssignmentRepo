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
      <Heading as="h2" mb="10" fontSize="xl">
        Our Products
      </Heading>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Grid templateColumns="1fr 1fr 1fr 1fr" gap="10">
          {products.map((prod) => (
            <ProductCard key={prod._id} product={prod} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
