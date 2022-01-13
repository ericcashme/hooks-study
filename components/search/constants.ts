export const ORDER_OPTIONS = [
  {
    id: 'RELEVANCE',
    name: 'Relevance (default)',
  },
  {
    id: 'PRICE_DESC',
    name: 'Price: highest first',
  },
  {
    id: 'PRICE_ASC',
    name: 'Price: lowest first',
  },
];

export const GUESTS_OPTIONS = (() => {
  const guests = [{ id: 1, name: '1 Guest' }];
  const arr = Array.from({ length: 29 }, (_, i) => i + 2);
  arr.forEach((i) => {
    guests.push({
      id: i,
      name: `${i} Guests`,
    });
  });

  return guests;
})();
