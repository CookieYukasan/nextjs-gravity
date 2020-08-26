import { NextPage } from 'next';
import Header from '../components/Header';
import { Image, Box, Heading, Text, Button, Grid } from '@chakra-ui/core';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid
        px={{ base: 5, md: 0 }}
        display={{ base: 'block', md: 'grid' }}
        templateColumns="64px 1fr 1fr 64px"
        templateRows="150px 1fr"
        templateAreas="
          '. . . .'
          '. heading hero .'
        "
      >
        <Image
          gridArea="hero"
          zIndex={-1}
          src="/hero-image.svg"
          mx="auto"
          mt={{ sm: '-5rem', md: '-21rem' }}
          width={{ base: '90vw', md: '650px' }}
          height={{ base: '500px', md: '700px' }}
        />
        <Box gridArea="heading">
          <Heading size="xl" color="#22322F" lineHeight={1.4}>
            Simple time tracking.
            <br />
            Powerful reporting.
          </Heading>
          <Text fontSize="lg" color="#22322F" letterSpacing={0.08} mt={3}>
            Turn yout team on to productivity with Gravity the time tracker.
          </Text>
          <Button
            bg="#71A89E"
            borderRadius={10}
            border="2px solid #000000"
            my={5}
            fontWeight="bold"
            color="white"
            _hover={{ opacity: 0.8 }}
          >
            Request early access
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
