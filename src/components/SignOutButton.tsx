import { Button } from "@/components/ui/button.tsx";
import signUserOut from "@/utils/signOut.ts";
import { useNavigate } from "react-router-dom";

export default function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signUserOut();
    navigate("/signin");
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
