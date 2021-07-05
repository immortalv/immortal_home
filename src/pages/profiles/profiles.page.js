import React, { useState } from "react";
import { Link } from "react-router-dom";
// import debounce from "lodash.debounce";
import { PROFILE } from "constants/routes.constants";
import { useProfiles } from "queries/profiles/use-profiles";
import ProfilesCard from "components/profiles/profiles-card";
import SearchContainer from "components/common/search-input";
import { validateProfileSearchValue } from "utils/profile.utils";

import "./style.scss";
// const DEBOUNCE_TIME = 400;

// const defaultOptions = {
//   leading: false,
//   trailing: true,
// };

// const useDebouncedFn = (
//   fn,
//   wait = 100,
//   options = defaultOptions,
//   dependencies
// ) => {
//   console.log("dependencies", dependencies);
//   const debounced = debounce(fn, wait, options);

//   return useCallback(debounced, dependencies);
// };

const ProfilesPage = () => {
  const [search, setSearch] = useState("");
  const { data } = useProfiles(search);

  const handleChange = ({ target }) => {
    const validated = validateProfileSearchValue(target.value);
    setSearch(validated);
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
          {data?.results?.map((profile, index) => (
            <Link key={profile.id} to={`${PROFILE}/${profile.id}`}>
              <ProfilesCard profile={profile} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProfilesPage;
