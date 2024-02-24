// AboutPage.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Box p="6">
      <Heading as="h1" size="xl" mb="4">
        About Us
      </Heading>
      <Text fontSize="lg" mb="4">
        Welcome to our e-commerce app! We are dedicated to providing you with
        the best shopping experience.
      </Text>
      <Text fontSize="lg" mb="4">
        Our mission is to offer high-quality products, exceptional customer
        service, and seamless online shopping.
      </Text>
      <Text fontSize="lg" mb="4">
        At our e-commerce store, you'll find a wide range of products carefully
        curated to meet your needs. From electronics to fashion, home decor to
        accessories, we have something for everyone.
      </Text>
      <Text fontSize="lg" mb="4">
        Our team consists of passionate individuals who are committed to
        delivering excellence in every aspect of our business. From product
        selection to customer support, we're dedicated to exceeding your
        expectations.
      </Text>
      <Text fontSize="lg" mb="4">
        We are proud to support small businesses and independent creators. By
        shopping with us, you're not only getting great products but also
        contributing to the growth of local economies and supporting
        entrepreneurs.
      </Text>
      <Text fontSize="lg" mb="4">
        Sustainability is a priority for us. We are actively working to reduce
        our environmental footprint by minimizing waste, using eco-friendly
        packaging, and partnering with sustainable brands.
      </Text>
      <Text fontSize="lg" mb="4">
        Your feedback is invaluable to us. We're constantly listening to your
        suggestions and improving our platform to better serve your needs. Your
        satisfaction is our driving force, and we're committed to continuously
        enhancing your shopping experience.
      </Text>
      <Text fontSize="lg">
        Thank you for choosing us as your trusted shopping partner. We're
        grateful for your support and look forward to serving you for years to
        come!
      </Text>
    </Box>
  );
};

export default AboutPage;
