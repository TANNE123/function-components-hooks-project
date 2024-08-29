export const Products = () => {
  const result = [];

  for (let i = 1; i <=20; i++) {
    const obj = { id: i, name: "mohan", role: "developer" };
    result.push(obj);
  }
  return result;
};
Products();
