import { useTheme } from "../ThemeContext";

function DailyOverviewItem({ data }) {
  const { lightTheme } = useTheme();
  return (
    <div
      className={`flex flex-col grow p-6 gap-7 ${
        lightTheme
          ? "bg-light-bg-card hover:bg-[#E1E4F0]"
          : "bg-dark-bg-card hover:bg-[#333A55]"
      } hover:cursor-pointer `}
    >
      <div className="flex flex-row justify-between items-center">
        <p
          className={`font-bold text-sm capitalize ${
            lightTheme ? "text-light-copy-1" : "text-dark-copy-1"
          }`}
        >
          {data.title}
        </p>
        <div>
          <img src={`/images/icon-${data.media}.svg`} alt={data.media} />
        </div>
      </div>
      <div className="flex flex-row items-end justify-between">
        <p
          className={`inter font-bold text-[32px] tracking-wider leading-8 ${
            lightTheme ? "text-light-copy-2" : "text-dark-copy-2"
          }`}
        >
          {data.value}
        </p>
        <div
          className={`flex flex-row gap-1 ${
            data.change > 0
              ? "text-app_positive"
              : data.change < 0
              ? "text-app_negative"
              : lightTheme
              ? "text-light-copy-2"
              : "text-dark-copy-2"
          }`}
        >
          <div className="my-auto ">
            {data.change > 0 ? (
              <img src="/images/icon-up.svg" />
            ) : data.change < 0 ? (
              <img src="/images/icon-down.svg" />
            ) : null}
          </div>
          <p className="text-xs">{`${Math.abs(data.change)}%`}</p>
        </div>
      </div>
    </div>
  );
}

export default DailyOverviewItem;
