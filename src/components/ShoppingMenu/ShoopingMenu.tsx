import { Topbar } from "../Profile/Topbar/Topbar";
import { BreadCrumbs } from "../BreadCrumbs/BreadCrumbs";
import { DataTable } from "./DataTable/DataTable";
import bgImg from '../../assets/imgs/bg-profile.png';

export function ShoppingMenu() {
  return (
    <main className="w-full h-1000 bg-P50 flex flex-col items-center">
      <div className="w-full h-90" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
        <Topbar />
      </div>

      <div className="w-1200 h-20 bg-white -mt-56 flex items-center justify-between">
        <span className="text-GL300 text-2xl font-semibold px-8">Compras</span>
        <BreadCrumbs />
      </div>
      
      <DataTable />
    </main>
  );
}