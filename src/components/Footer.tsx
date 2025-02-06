import Insta from "../assets/icons/insta.svg";
import Xsocial from "../assets/icons/x-social.svg";
import Tiktok from "../assets/icons/tiktok.svg";
import Youtube from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/20 pt-2">
          <div className="text-center">© 2024 Your Company, Inc. All rights reserved</div>
          <ul className="flex items-center gap-2.5 justify-center">
            <li>
              <Insta />
            </li>
            <li>
              <Xsocial />
            </li>
            <li>
              <Tiktok />
            </li>
            <li>
              <Youtube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
