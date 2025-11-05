import { Container, Title, Text, Stack, Space } from '@mantine/core';

import Services from './components/services/services';
import Experiance from './components/experiance/experiance';
import Portfolio from './components/portfolio/portfolio';
import Price from './components/price/price';
import Contact from './components/contact/contact';

export default function Home() {
  return (
    <Container size={`lg`} className={`px-4 sm:px-6 lg:px-8`} py={`xl`} >
      <Stack >
        <div className={`grid gap-12`} >
          <Services />
          <Experiance />
          <Portfolio />
          <Price />
          <Contact />
        </div>
      </Stack>
    </Container>
  );
}
