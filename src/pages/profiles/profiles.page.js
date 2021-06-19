import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { PROFILE } from "constants/routes.constants";
import { getPublicProfiles } from "services/api/profile.service";
import ProfilesCard from "components/profiles/profiles-card";
import SearchContainer from "components/common/search-input";
import { getProfileImg } from "utils/image.utils";
import { validateProfileSearchValue } from "utils/profile.utils";
import profilesData from "./profile.data";

import "./style.scss";

const DEBOUNCE_TIME = 400;

const defaultOptions = {
  leading: false,
  trailing: true,
};

const useDebouncedFn = (
  fn,
  wait = 100,
  options = defaultOptions,
  dependencies
) => {
  console.log("dependencies", dependencies);
  const debounced = debounce(fn, wait, options);

  return useCallback(debounced, dependencies);
};

const ProfilesPage = () => {
  const [data, setData] = useState(profilesData);
  const [search, setSeach] = useState("");

  useEffect(() => {
    const getProfiles = async () => {
      // let valid = search.replace(/\s/, "|");
      const query = `name=${search}`;
      const profiles = await getPublicProfiles(query);
      console.log("profiles", profiles);
      setData([...data, ...profiles.results]);
    };

    debounce(getProfiles, 1);

    getProfiles();
  }, [search]);

  // useDebouncedFn(
  //   async () => {
  //     const query = `name=${search}`;
  //     const profiles = await getPublicProfiles(query);
  //     console.log("profiles", profiles);
  //     setData([...data, ...profiles.results]);
  //   },
  //   1,
  //   {},
  //   [search]
  // );

  const handleChange = ({ target }) => {
    const validated = validateProfileSearchValue(target.value);
    setSeach(validated);

    const getProfiles = async () => {
      console.log("call");
      const query = `name=${search}`;
      const profiles = await getPublicProfiles(query);
      console.log("profiles", profiles);
      setData([...data, ...profiles.results]);
    };

    debounce(() => getProfiles(), DEBOUNCE_TIME, defaultOptions);
  };

  return (
    <main className="profiles">
      <section className="home__top-block">
        <div className="quoute-block">
          <h2 className="quoute__title">
            Людина живе доти, поки <br /> живе пам&apos;ять про неї
          </h2>
          <p className="quoute__text">
            Оживіть спогади вашої родини, досліджуючи життя тих, хто був до вас.
          </p>
        </div>
        <SearchContainer value={search} onChange={handleChange} />
        <div className="profiles__list">
          <h3 className="title">Публічні профілі</h3>
          {data.map((profile, index) => (
            <Link key={profile.id} to={`${PROFILE}/${profile.id}`}>
              <ProfilesCard
                fullName={profile.name}
                description={profile.description}
                imgSrc={getProfileImg(`profile-image-${index + 1}`)}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProfilesPage;
