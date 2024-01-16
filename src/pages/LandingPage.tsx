import iphoneMock from "../assets/iphoneMock.png";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import desktopMock from "../assets/desktopMock.png";
export default function LandingPage() {
  return (
    <div
      className={
        "flex-col flex  items-center min-h-screen bg-blue-950 py-20 gap-4 justify-center "
      }
    >
      <h1 className={"text-white text-4xl"}>Résumé Radar</h1>
      <div className={"md:flex w-screen md:justify-center"}>
        <img
          className={"w-11/12 md:hidden md:fixed"}
          src={iphoneMock}
          alt="image of app on iphone"
        />
        <img
          className={"hidden md:flex md:w-1/3 md:my-auto"}
          src={desktopMock}
          alt="image of app on desktop"
        />
      </div>
      <div className={"bg-white flex-row m-2 rounded-l"}>
        <p className={"text-black text-center m-2 "}>
          For when you forget what you've applied for, sign up to keep them on
          your radar.
        </p>
      </div>
      <nav
        className={"bg-white w-screen py-2 flex justify-evenly fixed bottom-0"}
      >
        <Link to={"/signin"}>
          <Button>Sign In</Button>
        </Link>
        <Link to={"/signup"}>
          <Button>Sign Up</Button>
        </Link>
      </nav>
    </div>
  );
}
