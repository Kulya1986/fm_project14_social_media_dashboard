import { useTheme } from "../ThemeContext";

function Toggle() {
  const { lightTheme, handleThemeChange } = useTheme();
  return (
    <div
      id="mode-switcher"
      className="flex flex-row justify-between my-4 items-center 2xl:justify-start 2xl:gap-3.5"
    >
      <p
        className={`font-inter font-bold text-sm ${
          lightTheme ? "text-light-copy-1" : "text-dark-copy-1"
        }`}
      >
        Dark Mode
      </p>
      <div className="content-center">
        <label
          className="inline-block h-[24px] top-0.5 relative w-[48px]"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            id="checkbox"
            className="hidden peer"
            onChange={handleThemeChange}
            value={lightTheme}
            defaultChecked={lightTheme}
          />
          <div
            className={`  top-0 left-0 right-0 bottom-0 absolute cursor-pointer duration-300 ${
              lightTheme
                ? "before:bg-[#F1F3FA]  peer-checked:bg-light_toggle"
                : "before:bg-[#252B42] bg-linear-to-r from-dark_toggle_green to-dark_toggle_blue"
            } before:bottom-[3px] before:content-[] before:h-[18px] before:left-[3px] before:absolute before:w-[18px] before:duration-300 rounded-[24px] before:rounded-[50%]  peer-checked:before:translate-x-[24px]`}
          ></div>
        </label>
      </div>
    </div>
  );
}

export default Toggle;
