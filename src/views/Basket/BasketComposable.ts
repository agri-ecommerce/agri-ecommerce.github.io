import ServiceBasket from "@/services/ServiceBasket";

export const useGetBasket = async () => {
  const resp: any = await ServiceBasket.getBasket();
  if (resp) {
    return resp.data;
  } else {
    return {};
  }
};