import { FcOk } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";

export default function PasswordGuide({ capitalTest, specialTest }) {
  return (
    <ul className={"bg-gray-100 border-2 border-black rounded-xl p-1 my-2"}>
      <p>Password should contain: </p>
      <li className={"flex items-center justify-between"}>
        1 special character:
        {capitalTest ? <FcOk /> : <FcHighPriority />}
      </li>
      <li className={"flex items-center justify-between"}>
        1 Capital letter :{specialTest ? <FcOk /> : <FcHighPriority />}
      </li>
    </ul>
  );
}
