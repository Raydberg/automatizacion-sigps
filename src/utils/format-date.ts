export const formatDate = (value: string) => {
  const [year, month, day] = value.slice(0, 10).split("-");

  return `${day}/${month}/${year}`;
};
