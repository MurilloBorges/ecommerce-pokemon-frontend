const formatReal = (n: string | number): string => {
  const formatedN = Number(n);
  if (!Number(formatedN)) return '-';
  return formatedN.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

const func = () => {};

export { formatReal, func };
