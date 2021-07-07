import { useQueryClient, useQuery, useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getPublicProfiles,
  getProfiles,
  deleteProfile,
  removeFolder,
} from "services/api/profile.service";
import { showErrorToast, showSuccessToast } from "components/toasters";

const USER_PROFILES = "USER_PROFILES";
const PUBLIC_PROFILES = "PUBLIC_PROFILES";

export const useProfiles = (search = "") => {
  const query = `name=${search}`;
  return useQuery(`${PUBLIC_PROFILES} ${search}`, async () => {
    const data = await getPublicProfiles(query);
    return data;
  });
};

export const useUserProfiles = () => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(USER_PROFILES, async () => {
    const token = await getAccessTokenSilently();
    const data = await getProfiles(token);
    return data;
  });
};

export const deleteUserProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, token }) => {
      return deleteProfile(id, token);
    },
    {
      onSuccess: (_, { id, userId }) => {
        const queryParams = `userId=${userId}&profileId=${id}`;
        removeFolder(queryParams);

        showSuccessToast("Профіль успішно видалено");
        queryClient.invalidateQueries(USER_PROFILES);
      },

      onError: () => {
        showErrorToast("Щось пішло не так...");
      },
    }
  );
};
