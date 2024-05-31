import ButtonIcon from "../ui/Button";
import { TbLogout } from "react-icons/tb";
import LoaderMini from "./../ui/LoaderMini";
import { useLogout } from "./useLogout";

export default function Logout() {
  const { logout, isPending } = useLogout();

  if (isPending) return <LoaderMini />;

  return (
    <ButtonIcon onClick={logout} isPending={isPending}>
      {!isPending ? <TbLogout size="2rem" color="#118AB2" /> : <LoaderMini />}
    </ButtonIcon>
  );
}

//!! Fix Loader mini container!!
