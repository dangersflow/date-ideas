import { Button, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

export default function FoodIdeasPage() {
  const { status, data, error, refetch } = useQuery<{ name: string }>({
    queryKey: ['/meals'],
  });

  return (
    <>
      <Title size="h2">Food Ideas</Title>
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
