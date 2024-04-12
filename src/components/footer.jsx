import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-base-300 p-4 ">
      <aside>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <div className="flex gap-4 md:place-self-center md:justify-self-end">
        <a>
          <SiLinkedin size={22} />
        </a>
        <a>
          <SiGithub size={22} />
        </a>
      </div>
    </footer>
  );
}
