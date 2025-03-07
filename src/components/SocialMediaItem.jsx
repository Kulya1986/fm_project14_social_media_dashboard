import { useTheme } from "../ThemeContext";

function SocialMediaItem({ data }) {
  const { lightTheme } = useTheme();

  return (
    <div
      className={`flex flex-col  pt-[5px] border-0 rounded-t-[5px] rounded-b-[10px] hover:cursor-pointer ${
        data.color === "facebook"
          ? "bg-app_facebook"
          : data.color === "twitter"
          ? "bg-app_twitter"
          : data.color === "instagram"
          ? "bg-linear-to-r from-app_instagram_yellow to-app_instagram_rose"
          : "bg-app_youtube"
      }`}
    >
      <div
        className={`flex flex-col grow justify-between items-center p-6 gap-6 2xl:gap-7 rounded-b-[5px]  ${
          lightTheme
            ? "bg-light-bg-card hover:bg-[#E1E4F0]"
            : "bg-dark-bg-card hover:bg-[#333A55]"
        }  `}
      >
        <div className="flex flex-row gap-2">
          <div>
            <img
              src={data.mediaLogo}
              alt={data.mediaLogo.split("-")[1].split(".")[0]}
            />
          </div>
          <p
            className={`font-bold text-xs ${
              lightTheme ? "text-light-copy-1" : "text-dark-copy-1"
            }`}
          >
            {data.mediaNick}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p
            className={`inter font-bold text-[56px] tracking-wider leading-[48px] ${
              lightTheme ? "text-light-copy-2" : "text-dark-copy-2"
            }`}
          >
            {data.followers}
          </p>
          <p
            className={`text-xs uppercase tracking-[5px] ${
              lightTheme ? "text-light-copy-1" : "text-dark-copy-1"
            }`}
          >
            {data.type}
          </p>
        </div>
        <div
          className={`flex flex-row content-center gap-1 ${
            data.dailyChange > 0
              ? "text-app_positive"
              : data.dailyChange < 0
              ? "text-app_negative"
              : lightTheme
              ? "text-light-copy-2"
              : "text-dark-copy-2"
          }`}
        >
          <div className="my-auto ">
            {data.dailyChange > 0 ? (
              <img src="/images/icon-up.svg" />
            ) : data.dailyChange < 0 ? (
              <img src="/images/icon-down.svg" />
            ) : null}
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-xs font-bold">{Math.abs(data.dailyChange)}</p>
            <p className="text-xs font-bold">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaItem;
