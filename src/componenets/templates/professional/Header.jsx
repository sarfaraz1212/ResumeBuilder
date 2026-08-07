import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import useAboutStore from "../../../stores/about";
import { ACCENT } from "./constants";

const Header = () => {
  const { name, title, email, phone } = useAboutStore();

  return (
    <header className="text-center">
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <p className="mt-1 text-base font-medium" style={{ color: ACCENT }}>
        {title}
      </p>
      <div className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-700">
        <span className="flex items-center gap-1">
          <EmailIcon sx={{ fontSize: 15 }} /> {email}
        </span>
        <span className="text-gray-400">|</span>
        <span className="flex items-center gap-1">
          <PhoneIcon sx={{ fontSize: 15 }} /> {phone}
        </span>
      </div>
    </header>
  );
};

export default Header;
