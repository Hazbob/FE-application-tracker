import { MdRadar } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className={
        "bg-transparent w-screen absolute h-12 top-0 flex items-center gap-2 px-5 "
      }
    >
      <Link className={"m-0 p-0 flex items-center w-screen"} to={"/"}>
        <MdRadar size={"1.5em"} color={"white"} />
        <div className={"flex justify-between w-11/12"}>
          <h1 className={"text-white"}>Résumé Radar</h1>
        </div>
      </Link>
      <a
        aria-label={"link to the repository for this projects backend"}
        target={"_blank"}
        href="https://github.com/Hazbob/Application-Tracker"
      >
        <FaGithub color={"white"} size={"1.5em"} />
      </a>
    </header>
  );
}
