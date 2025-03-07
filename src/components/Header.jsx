import { useTheme } from "../ThemeContext";

function Header() {
  const { lightTheme } = useTheme();
  return (
    <header
      className={`pb-6 border-b-1 2xl:border-0 2xl:pb-0 ${
        lightTheme ? " border-[#848BAB]" : " border-[#333A55]"
      }`}
    >
      <h1
        className={`font-bold text-2xl 2xl:text-[28px] ${
          lightTheme ? " text-light-copy-2" : "text-dark-copy-2"
        }`}
      >
        Social Media Dashboard
      </h1>
      <h2
        className={`font-bold text-sm ${
          lightTheme ? " text-light-copy-1" : "text-dark-copy-1"
        }`}
      >
        Total Followers: 23,004
      </h2>
    </header>
  );
}

export default Header;
