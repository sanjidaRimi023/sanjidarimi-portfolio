import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./AxiosInstance";

const useAxiosQuery = (key, url) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await axiosInstance.get(url);
      return res.data;
    },
  });
};

export default useAxiosQuery;
