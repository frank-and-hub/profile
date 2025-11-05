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
        <section className={`text-center sm:text-left max-w-3xl mx-auto sm:mx-0`} >
          <Title order={1} size={`h1`} className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`} >
            Hi, I'm Frank — a developer
          </Title>
          <Space h={`md`} />
          <Text size={`xl`} c={`dimmed`} className={`text-lg sm:text-xl lg:text-2xl`} >
            I build performant web apps and delightful UIs.
          </Text>
        </section>

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
