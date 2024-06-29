import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-base-300 p-4 ">
      <aside>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <div className="flex gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/marcin-szot-7b2308119/"
          name="footerLinkLI"
        >
          <SiLinkedin size={22} />
        </a>
        <a href="https://github.com/MSzoot" name="footerLinkGit">
          <SiGithub size={22} />
        </a>
      </div>
    </footer>
  );
}
