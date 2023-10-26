import { MenuProfile } from "../../MenuProfile/MenuProfile";
import { MenuBag } from "../../ShoppingBag/MenuBag/MenuBag";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { SearchUsers } from "./SearchUsers/SearchUsers";
import logoTripness from "../../../assets/imgs/logo-tripness.png";

export function Topbar() {
  const urlParamsProfile = location.href.split("/").pop();

  return (
    <header className="w-full flex flex-row items-center justify-between px-16 py-9">
      <div className="w-20 h-10 bg-white flex items-center rounded-full">
        <DropdownMenu />
        <SearchUsers />
      </div>

      <div>
        <MenuBag />
        <MenuProfile />
      </div>
    </header>
  );
}
