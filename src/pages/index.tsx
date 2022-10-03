import type { NextPage } from 'next';
import Image from 'next/image';
import { Box, Container, Heading } from 'theme-ui';
import HeroImage from '../assets/robert-andre-cathrine-members-lounge.jpeg';
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ p: 4, py: 7 }}>
          <Heading sx={{ fontSize: 7, fontWeight: 500 }}>
            Gode ledere blir ikke født gode,
            <br />
            de blir trent opp.
          </Heading>
        </Box>
        <Image
          src={HeroImage}
          alt="Robert Andre and Cathrine in Members Lounge of Share Oslo"
          objectFit={'cover'}
          objectPosition={'center'}
          height="700px"
        />
        Hei
      </Container>
    </Layout>
  );
};

export default Home;
