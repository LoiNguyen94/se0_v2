export const roundToX = (num: number) => {
  if (num) return num.toFixed();
  return 0;
};

export const getPriceInList = (price_list: any) => {
  const priceList = Object.keys(price_list).map((key) => price_list[key]);
  const priceMio = priceList[0]?.price;
  return priceMio;
};

export const formatMoneyVND = (num: number) => {
  return (
    roundToX(num)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ₫'
  );
};
