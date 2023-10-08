import ServiceBanner from "@/services/ServiceBanner";
import ServiceMaster from "@/services/ServiceMaster";

export const useGetBannerList = async () => {
    const resp: any = await ServiceBanner.getBannerList();
    if (resp) {
      return resp.data;
    } else {
      return [];
    }
  };

  export const useGetMasterCategoryGroup = async () => {
    const resp: any = await ServiceMaster.getMasterCategoryGroup();
    resp.data.forEach((element: any) => {
        element.isActive = false;
    });
    if (resp) {
      return resp.data;
    } else {
      return [];
    }
  };

  export const useGetMasterGroup = async () => {
    const resp: any = await ServiceMaster.getMasterGroup();
    if (resp) {
      return resp.data;
    } else {
      return [];
    }
  };