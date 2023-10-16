import ServiceMaster from "@/services/ServiceMaster";

export const useGetPayment = async () => {
  const resp: any = await ServiceMaster.getRent();
  if (resp) {
    return resp.data;
  } else {
    return [];
  }
};