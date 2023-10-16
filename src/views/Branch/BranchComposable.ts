import ServiceBranch from "@/services/ServiceBranch";

export const useGetBranch = async () => {
  const resp: any = await ServiceBranch.getBranches();
  if (resp) {
    return resp.data;
  } else {
    return [];
  }
};