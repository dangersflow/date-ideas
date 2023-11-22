import { NavItems } from '@/components/NavItems/NavItems';
import { AppShell, Burger, Flex, MantineProvider, Title } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <AppShell
        header={{ height: 80 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
      <AppShell.Header>
        <Flex
          align="center"
          style={{
            height: '100%',
            marginLeft: '2rem',
        }}
        >
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title>Quotes</Title>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md"><NavItems /></AppShell.Navbar>

      <AppShell.Main><Component {...pageProps} /></AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
