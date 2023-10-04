import ServiceMaster from "@/services/ServiceMaster";

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