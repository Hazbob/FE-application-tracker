import { MdRadar } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className={
        "bg-transparent w-screen absolute h-12 top-0 flex items-center gap-2"
      }
    >
      <MdRadar size={"1.5em"} color={"white"} />
      <div className={"flex justify-between w-11/12"}>
        <h1 className={"text-white"}>Resume Radar</h1>
        <p>
          <a
            target={"_blank"}
            href="https://github.com/Hazbob/Application-Tracker"
          >
            <FaGithub color={"white"} size={"1.5em"} />
          </a>
        </p>
      </div>
    </header>
  );
}
