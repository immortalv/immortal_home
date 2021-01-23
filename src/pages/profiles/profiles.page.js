import { ProfilesCard } from "components/common";
import React from "react";
import { Button, Input } from "semantic-ui-react";
import { getProfileImg } from "utils/image.utils";

// import IconBlock from "components/common/icon-block";
// import { PeopleGroupIcon, PhoneIcon, ScriptIcon, TouchIcon } from "icons";

import "./style.scss";

const profilesData = [
  {
    fullName: "Василевська Василина ",
    description:
      "maecenas platea sit integer suscipit sit et tellus purus. Et tristique pellentesque nisi aliquam quis tristique. Blandit quis ligula viverra egestas tempor scelerisque nibh nunc pulvinar. Nunc pellentesque sed auctor lorem et. Semper montes, donec feugiat at eu faucibus dolor arcu. Dui nibh iaculis nunc orci id senectus pellentesque eget cursus. Leo faucibus nisi cum commodo lectus egestas tincidunt mi. Potenti dictum sit tincidunt orci arcu laoreet ut vitae, urna. Semper lectus sed risus, pellentesque. Aliquam, venenatis sed nibh consequat auctor donec nunc tortor in. Elit enim nibh pulvinar gravida porta imperdiet. Aliquam nulla nisl tellus, magna tellus enim lectus tristique. Convallis iaculis turpis felis, dolor ac vitae vulputate. Turpis posuere tempor pretium sapien. Urna, tincidunt nullam ac in facilisi purus mauris pharetra sagittis. Nunc nibh est at venenatis tempus, ac arcu tincidunt donec. Mi neque, vitae elit suspendisse pretium condimentum tincidunt eget commodo. In turpis dolor lectus ultricies aliquet. Sollicitudin natoque vehicula est pellentesque in lacus.",
    imgSrc: "",
  },
  {
    fullName: "Василевська Василина ",
    description:
      "maecenas platea sit integer suscipit sit et tellus purus. Et tristique pellentesque nisi aliquam quis tristique. Blandit quis ligula viverra egestas tempor scelerisque nibh nunc pulvinar. Nunc pellentesque sed auctor lorem et. Semper montes, donec feugiat at eu faucibus dolor arcu. Dui nibh iaculis nunc orci id senectus pellentesque eget cursus. Leo faucibus nisi cum commodo lectus egestas tincidunt mi. Potenti dictum sit tincidunt orci arcu laoreet ut vitae, urna. Semper lectus sed risus, pellentesque. Aliquam, venenatis sed nibh consequat auctor donec nunc tortor in. Elit enim nibh pulvinar gravida porta imperdiet. Aliquam nulla nisl tellus, magna tellus enim lectus tristique. Convallis iaculis turpis felis, dolor ac vitae vulputate. Turpis posuere tempor pretium sapien. Urna, tincidunt nullam ac in facilisi purus mauris pharetra sagittis. Nunc nibh est at venenatis tempus, ac arcu tincidunt donec. Mi neque, vitae elit suspendisse pretium condimentum tincidunt eget commodo. In turpis dolor lectus ultricies aliquet. Sollicitudin natoque vehicula est pellentesque in lacus.",
    imgSrc: "",
  },
  {
    fullName: "Василевська Василина ",
    description:
      "maecenas platea sit integer suscipit sit et tellus purus. Et tristique pellentesque nisi aliquam quis tristique. Blandit quis ligula viverra egestas tempor scelerisque nibh nunc pulvinar. Nunc pellentesque sed auctor lorem et. Semper montes, donec feugiat at eu faucibus dolor arcu. Dui nibh iaculis nunc orci id senectus pellentesque eget cursus. Leo faucibus nisi cum commodo lectus egestas tincidunt mi. Potenti dictum sit tincidunt orci arcu laoreet ut vitae, urna. Semper lectus sed risus, pellentesque. Aliquam, venenatis sed nibh consequat auctor donec nunc tortor in. Elit enim nibh pulvinar gravida porta imperdiet. Aliquam nulla nisl tellus, magna tellus enim lectus tristique. Convallis iaculis turpis felis, dolor ac vitae vulputate. Turpis posuere tempor pretium sapien. Urna, tincidunt nullam ac in facilisi purus mauris pharetra sagittis. Nunc nibh est at venenatis tempus, ac arcu tincidunt donec. Mi neque, vitae elit suspendisse pretium condimentum tincidunt eget commodo. In turpis dolor lectus ultricies aliquet. Sollicitudin natoque vehicula est pellentesque in lacus.",
    imgSrc: "",
  },
  {
    fullName: "Василевська Василина ",
    description:
      "maecenas platea sit integer suscipit sit et tellus purus. Et tristique pellentesque nisi aliquam quis tristique. Blandit quis ligula viverra egestas tempor scelerisque nibh nunc pulvinar. Nunc pellentesque sed auctor lorem et. Semper montes, donec feugiat at eu faucibus dolor arcu. Dui nibh iaculis nunc orci id senectus pellentesque eget cursus. Leo faucibus nisi cum commodo lectus egestas tincidunt mi. Potenti dictum sit tincidunt orci arcu laoreet ut vitae, urna. Semper lectus sed risus, pellentesque. Aliquam, venenatis sed nibh consequat auctor donec nunc tortor in. Elit enim nibh pulvinar gravida porta imperdiet. Aliquam nulla nisl tellus, magna tellus enim lectus tristique. Convallis iaculis turpis felis, dolor ac vitae vulputate. Turpis posuere tempor pretium sapien. Urna, tincidunt nullam ac in facilisi purus mauris pharetra sagittis. Nunc nibh est at venenatis tempus, ac arcu tincidunt donec. Mi neque, vitae elit suspendisse pretium condimentum tincidunt eget commodo. In turpis dolor lectus ultricies aliquet. Sollicitudin natoque vehicula est pellentesque in lacus.",
    imgSrc: "",
  },
  {
    fullName: "Василевська Василина ",
    description:
      "maecenas platea sit integer suscipit sit et tellus purus. Et tristique pellentesque nisi aliquam quis tristique. Blandit quis ligula viverra egestas tempor scelerisque nibh nunc pulvinar. Nunc pellentesque sed auctor lorem et. Semper montes, donec feugiat at eu faucibus dolor arcu. Dui nibh iaculis nunc orci id senectus pellentesque eget cursus. Leo faucibus nisi cum commodo lectus egestas tincidunt mi. Potenti dictum sit tincidunt orci arcu laoreet ut vitae, urna. Semper lectus sed risus, pellentesque. Aliquam, venenatis sed nibh consequat auctor donec nunc tortor in. Elit enim nibh pulvinar gravida porta imperdiet. Aliquam nulla nisl tellus, magna tellus enim lectus tristique. Convallis iaculis turpis felis, dolor ac vitae vulputate. Turpis posuere tempor pretium sapien. Urna, tincidunt nullam ac in facilisi purus mauris pharetra sagittis. Nunc nibh est at venenatis tempus, ac arcu tincidunt donec. Mi neque, vitae elit suspendisse pretium condimentum tincidunt eget commodo. In turpis dolor lectus ultricies aliquet. Sollicitudin natoque vehicula est pellentesque in lacus.",
    imgSrc: "",
  },
];

const HomePage = () => {
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
        <div className="search__container">
          <Input type="text" placeholder="Введіть запит" action>
            <input className="search__input" />
            <Button secondary className="search__btn">
              Знайти
            </Button>
          </Input>
        </div>
        <div className="profiles__list">
          <h3 className="title">Публічні профілі</h3>
          {profilesData.map((profile, index) => (
            <ProfilesCard
              key={profile.fullName}
              fullName={profile.fullName}
              description={profile.description}
              imgSrc={getProfileImg(`profile-image-${index + 1}`)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
