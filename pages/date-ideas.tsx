import { Button, Paper, Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

('client');

//function to generate random number from 0 to 100
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function DateIdeasPage() {
  const { status, data, error, isFetching, refetch } = useQuery({ queryKey: ['/activities'] });
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
  const [hasAnimationFinished, setHasAnimationFinished] = useState(false);

  return (
    <Stack
      justify="space-between"
      ta="center"
      style={{
        height: 'calc(100vh - 150px)',
        marginLeft: '2rem',
        marginRight: '2rem',
      }}
    >
      <Title
        size="h1"
        style={{
          textAlign: 'left',
          fontSize: '3rem',
          fontWeight: 'bold',
        }}
      >
        Date Ideas
      </Title>
      {status === 'pending' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <AnimatePresence mode="popLayout">
          {!hasFetchedOnce ? (
            <motion.div
              key={'helloString'}
              exit={{ opacity: 0, y: '350px' }}
              transition={{
                type: 'spring',
                stiffness: 2500,
                damping: 300,
                mass: 10,
                velocity: 1,
              }}
            >
              <Title
                size="h1"
                style={{
                  fontSize: '3rem',
                  fontWeight: 'lighter',
                  fontStyle: 'italic',
                }}
              >
                Press the button for an idea!
              </Title>
            </motion.div>
          ) : (
            <motion.div
              key={data.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0, y: '350px' }}
              transition={{
                type: 'spring',
                stiffness: 2500,
                damping: 300,
                mass: 10,
                velocity: 1,
              }}
            >
              <Title
                size="h1"
                style={{
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}
              >
                {data.name}
              </Title>
            </motion.div>
          )}

          <Button
            size="xl"
            variant="light"
            onClick={() => {
              if (!hasFetchedOnce) {
                setHasFetchedOnce(true);
              } else {
                refetch();
              }
            }}
          >
            Generate
          </Button>
        </AnimatePresence>
      )}
    </Stack>
  );
}
