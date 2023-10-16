import ServiceBanner from "@/services/ServicePayment";

export const useGetPayment = async (saleOrderId: any) => {
  const resp: any = await ServiceBanner.getPayment(saleOrderId);
  if (resp) {
    return resp.data;
  } else {
    return [];
  }
};