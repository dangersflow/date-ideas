import { Button, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

export default function DessertIdeasPage() {
  const { status, data, error, isFetching, refetch } = useQuery({ queryKey: ['/desserts'] });

  return (
    <>
      <Title size="h2">Dessert Ideas</Title>
      {status === 'pending' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>{data.name}</div>
          <Button size="xl" variant="light" onClick={() => refetch()}>
            Generate
          </Button>
        </>
      )}
    </>
  );
}
