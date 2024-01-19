import { NavLink } from "react-router-dom";
import { FooterCss } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterCss>
      <NavLink to="https://github.com/Vladyslav-Bekesh/" target="_blank">
        Go to my GitHub
      </NavLink>
    </FooterCss>
  );
};

export default Footer;
