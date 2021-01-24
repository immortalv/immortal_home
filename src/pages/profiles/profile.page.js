import React, { useEffect, useState } from "react";
import { PROFILE_TEMPLATE_TYPES } from "constants/profile.constants";
import {
  ProfileSimple,
  ProfileArticle,
  ProfileBook,
} from "components/profiles/templates";
import { getProfileImg } from "utils/image.utils";

import "./style.scss";
import { useParams } from "react-router-dom";

const profileDataMock = {
  fullName: "Василевська Василина",
  birthDate: "29.02.1956",
  deathDate: "31.12.2020",
  profileImg: getProfileImg("avatar-image-1", "jpg"),
  imageData: [
    {
      src: getProfileImg("avatar-image-1", "jpg"),
    },
    {
      src: getProfileImg("avatar-image-1", "jpg"),
    },
    {
      src: getProfileImg("avatar-image-1", "jpg"),
    },
    {
      src: getProfileImg("avatar-image-1", "jpg"),
    },
    {
      src: getProfileImg("avatar-image-1", "jpg"),
    },
  ],
  videoData: [],
  description:
    "maecenas platea sit integer suscipit sit et tellus purus. Et tristique pellentesque nisi aliquam quis tristique. Blandit quis ligula viverra egestas tempor scelerisque nibh nunc pulvinar. Nunc pellentesque sed auctor lorem et. Semper montes, donec feugiat at eu faucibus dolor arcu. Dui nibh iaculis nunc orci id senectus pellentesque eget cursus. Leo faucibus nisi cum commodo lectus egestas tincidunt mi. Potenti dictum sit tincidunt orci arcu laoreet ut vitae, urna. Semper lectus sed risus, pellentesque. Aliquam, venenatis sed nibh consequat auctor donec nunc tortor in. Elit enim nibh pulvinar gravida porta imperdiet. Aliquam nulla nisl tellus, magna tellus enim lectus tristique. Convallis iaculis turpis felis, dolor ac vitae vulputate. Turpis posuere tempor pretium sapien. Urna, tincidunt nullam ac in facilisi purus mauris pharetra sagittis. Nunc nibh est at venenatis tempus, ac arcu tincidunt donec. Mi neque, vitae elit suspendisse pretium condimentum tincidunt eget commodo. In turpis dolor lectus ultricies aliquet. Sollicitudin natoque vehicula est pellentesque in lacus.",
  templateType: PROFILE_TEMPLATE_TYPES.BOOK,
};

const ProfilePage = () => {
  const { profileId } = useParams();
  //   console.log("Params", profileId);
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    //   const profileData = getProfileData(profileId)
    setProfileData(profileDataMock);
  });

  if (!profileData) return <p>Loading...</p>;

  switch (profileData.templateType) {
    case PROFILE_TEMPLATE_TYPES.SIMPLE:
      return <ProfileSimple profileData={profileData} />;
    case PROFILE_TEMPLATE_TYPES.BOOK:
      return <ProfileBook profileData={profileData} />;
    case PROFILE_TEMPLATE_TYPES.ARTICLE:
      return <ProfileArticle profileData={profileData} />;
    default:
      return <ProfileSimple profileData={profileData} />;
  }
};

export default ProfilePage;
