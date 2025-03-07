import "../src/App.css";
import DailyOverviewItem from "./components/DailyOverviewItem";
import Header from "./components/Header";
import SocialMediaItem from "./components/SocialMediaItem";
import Toggle from "./components/Toggle";
import { useTheme } from "./ThemeContext";

const socialMediaData = [
  {
    mediaNick: "@nathanf",
    mediaLogo: "/images/icon-facebook.svg",
    followers: "1987",
    type: "followers",
    dailyChange: 12,
    color: "facebook",
  },
  {
    mediaNick: "@nathanf",
    mediaLogo: "/images/icon-twitter.svg",
    followers: "1044",
    type: "followers",
    dailyChange: 99,
    color: "twitter",
  },
  {
    mediaNick: "@realnathanf",
    mediaLogo: "/images/icon-instagram.svg",
    followers: "11k",
    type: "followers",
    dailyChange: 1099,
    color: "instagram",
  },
  {
    mediaNick: "Nathan F.",
    mediaLogo: "/images/icon-youtube.svg",
    followers: "8239",
    type: "subscribers",
    dailyChange: -144,
    color: "youtube",
  },
];

const dailyOverview = [
  { title: "page views", value: "87", media: "facebook", change: 3 },
  { title: "likes", value: "52", media: "facebook", change: -2 },
  { title: "likes", value: "5462", media: "instagram", change: 2257 },
  { title: "profile views", value: "52K", media: "instagram", change: 1375 },
  { title: "retweets", value: "117", media: "twitter", change: 303 },
  { title: "likes", value: "507", media: "twitter", change: 553 },
  { title: "likes", value: "107", media: "youtube", change: -19 },
  { title: "total views", value: "1407", media: "youtube", change: -12 },
];

function App() {
  const { lightTheme } = useTheme();

  return (
    <div
      id="page-container"
      className={`grow flex 2xl:h-dvh flex-col ${
        lightTheme ? " bg-light-bg" : " bg-dark-bg"
      }`}
    >
      <div
        id="top-bg"
        className={`grow h-[235px] absolute top-0 left-0 w-full rounded-b-[20px] 2xl:h-[244px] ${
          lightTheme ? " bg-light-bg-top" : " bg-dark-bg-top"
        }`}
      ></div>
      <div
        className={`flex grow relative flex-col px-6 py-9 2xl:px-40  bg-transparent`}
      >
        <nav className="flex flex-col mb-6 2xl:flex-row 2xl:pb-[46px] 2xl:justify-between 2xl:items-center 2xl:mb-0">
          <Header />
          <Toggle />
        </nav>
        <main className="flex flex-col">
          <section
            id="social-summary"
            className="grid grid-rows-4 gap-6 mb-[46px] 2xl:grid-cols-4 2xl:grid-rows-1 2xl:gap-[30px]"
          >
            {socialMediaData.map((item) => (
              <SocialMediaItem
                data={item}
                key={item.mediaLogo.split("-")[1].split(".")[0]}
              />
            ))}
          </section>
          <section id="daily-summary">
            <h3
              className={`font-bold text-2xl mb-7 2xl:mb-6 ${
                lightTheme ? " text-light-copy-2" : " text-dark-copy-2"
              }`}
            >
              Overview - Today
            </h3>
            <div className="grid grid-rows-8 gap-4 2xl:grid-cols-4 2xl:grid-rows-2 2xl:gap-x-[30px] 2xl:gap-y-6">
              {dailyOverview.map((item, i) => (
                <DailyOverviewItem data={item} key={`${item.media}-${i}`} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <footer
        className={`flex grow font-bold justify-center ${
          lightTheme ? " text-light-copy-2" : " text-dark-copy-2"
        }`}
      >
        <p>
          Challenge by
          <a
            className={`hover:underline`}
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            &nbsp; Frontend Mentor
          </a>
          . &nbsp;Coded by{" "}
          <a
            className={`hover:underline`}
            href="https://www.frontendmentor.io/profile/Kulya1986"
          >
            &nbsp;Nataliia Kulyk
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
