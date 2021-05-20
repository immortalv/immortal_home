import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { dispatch } from "store";

const useGetProfile = (id) => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getProfileData() {
      const token = await getAccessTokenSilently();
      dispatch.profile.getProfile({ id, token });
    }

    getProfileData();
  }, []);
};

export default useGetProfile;
