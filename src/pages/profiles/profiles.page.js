import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDebounceValue from "hooks/use-debounce-value.hook";
import { PROFILE } from "constants/routes.constants";
import { useProfiles } from "queries/profiles/use-profiles";
import ProfilesCard from "components/profiles/profiles-card";
import SearchContainer from "components/common/search-input";
import { validateProfileSearchValue } from "utils/profile.utils";

import "./style.scss";

const ProfilesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounceValue(searchTerm);
  const { data } = useProfiles(debouncedSearchTerm);

  const handleChange = ({ target }) => {
    const validated = validateProfileSearchValue(target.value);
    setSearchTerm(validated);
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
        <SearchContainer value={searchTerm} onChange={handleChange} />
        <div className="profiles__list">
          <h3 className="title">Публічні профілі</h3>
          {data?.results?.map((profile) => (
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
