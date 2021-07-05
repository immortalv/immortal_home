import { useQuery } from "react-query";
import { getPublicProfiles } from "services/api/profile.service";

export const useProfiles = (search = "") => {
  const query = `name=${search}`;
  return useQuery(`profiles ${search}`, async () => {
    const data = await getPublicProfiles(query);
    return data;
  });
};
