//index
export function convertVND(number: number) {
  return Number(number).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}
