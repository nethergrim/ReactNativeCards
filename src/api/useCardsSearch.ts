import useSWR from 'swr';

const cardsFetcher = (...args: any[]) => {
  return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${args[0]}&type=Trap%20Card,Spell%20Card,Normal%20Monster&sort=name`).then((res) => res.json());
};

export const useCardsSearch = (searchTerm: string) => {
  const { data, error } = useSWR(searchTerm, cardsFetcher);

  return {
    cards: data,
    isLoading: !error && !data,
    isError: error,
  };
};
