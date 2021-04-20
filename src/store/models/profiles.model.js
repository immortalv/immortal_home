import { getProfiles, getProfile } from "services/api/profile.service";
import { getProfileImg } from "utils/image.utils";
import { PROFILE_TEMPLATE_TYPES } from "constants/profile.constants";

const profileDataMock = {
  name: "Василевська Василина",
  birthDate: "29.02.1956",
  deathDate: "31.12.2020",
  mainPhoto: getProfileImg("profile-image-1", "jpg"),
  otherPhotos: [
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
  // videoData: [
  //   {
  //     src: getProfileImg("profile-video", "jpg"),
  //   },
  //   {
  //     src: getProfileImg("profile-video-1", "jpg"),
  //   },
  //   {
  //     src: getProfileImg("profile-video-1", "jpg"),
  //   },
  // ],
  description: `Тисячі любителів футболу та спорту мають причини бути вдячними моїй сестрі Василині, яка померла у віці 55 років від множинних ракових захворювань через дев'ять років після першого діагнозу рак молочної залози.

    Як керівник судових справ та конституційних справ у Supporter Direct, організації, яка сприяє залученню вболівальників до управління їх клубами та заохочує їх створювати акціонерні фонди, вона допомогла створити майже 200 таких трестів по всій країні.

    У 2017 році вона заснувала Жінки в грі, щоб заохотити більше жінок ходити на прямі матчі. Вона хотіла допомогти жінкам почуватись комфортно, відвідуючи матчі. Ініціатива розпочалася на нелігових іграх і швидко закріпилася в Прем'єр-лізі. У минулому сезоні "Манчестер Сіті" і "Хаддерсфілд Таун"`,
    descriptionAdditional: `Джекі народився і виховувався в м. Альтрінчам, Чешир, дочка Джойс (уроджена Ботам), перукарня, і Сем Форстер, столяр і колишній суднобудівник. Її пристрасть до футболу протягом усього життя, особливо не в лізі, спалахнула, коли наш батько взяв її до місцевої команди у віці п’яти років. Вона швидко зачепилася.

  У 1980 році вона приєдналася до адвокатів компанії Hills в Альтрінчамі на посаді секретаря, але зацікавилася юридичною практикою і почала навчатися на посаду юриста. У 1983 році вона приєдналася до юридичного департаменту ради Траффорда, а потім перейшла на більш керівну посаду до ради Вейл-Роял (нині частина Заходу Чешира та Честера) у 1990 році. Пізніше того ж року вона переїхала до Оксфордширу, приєднавшись до юридичного відділу ради округу Бакінгемшир , а пізніше став старшим юрисконсультом районної ради Вале Білого Коня.
  
  Вона стала управителем магазину та активісткою "Юнісон" на місцевому, регіональному та національному рівнях, розвиваючи прихильність до рівності, різноманітності та чесної гри, що стало її торговою маркою.`,
  template: PROFILE_TEMPLATE_TYPES.ARTICLE,
};

export const profiles = {
  state: {
    data: [],
    chosenProfile: null,
  },
  reducers: {
    setProfiles(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    setProfile(state, payload) {
      return {
        chosenProfile: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getProfiles(payload) {
      try {
        const profiles = await getProfiles(payload);
        await dispatch.profiles.setProfiles({ data: profiles });
      } catch (error) {
        dispatch.profiles.setProfiles({ data: [] });
      }
    },

    async getProfile(payload, state) {
      try {
        const { id, token } = payload;
        const profile = await getProfile(id, token);
        dispatch.profiles.setProfile(profile);
    } catch (error) {
      dispatch.profiles.setProfile(profileDataMock);
    }
    },
  }),
};
