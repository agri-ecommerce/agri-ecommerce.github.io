import ServiceBanner from "@/services/ServiceBanner";

export const useGetBannerList = async () => {
    const resp: any = await ServiceBanner.getBannerList();
    if (resp) {
      return resp.data;
    } else {
      return [];
    }
  };