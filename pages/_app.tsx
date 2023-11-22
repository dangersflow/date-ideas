/* eslint-disable import/order */
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { NavItems } from '@/components/NavItems/NavItems';
import { AppShell, Burger, Flex, MantineProvider, Title } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
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
            justify="space-between"
            style={{
              height: '100%',
              marginLeft: '2rem',
              marginRight: '2rem',
            }}
          >
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title>Date Idea Generator</Title>
            <ColorSchemeToggle />
          </Flex>
        </AppShell.Header>

        <AppShell.Navbar p="md"><NavItems /></AppShell.Navbar>

        <AppShell.Main>
          <AnimatePresence>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
