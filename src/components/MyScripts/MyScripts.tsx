import { useEffect, useState, useCallback, useMemo, FC } from "react";
import moment from "moment";
import bgImg from "../../assets/imgs/bg-profile.png";
import logoTripness from "../../assets/imgs/logo-tripness-white.png";
import MaterialReactTable, { MRT_Row } from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";
import styled from "styled-components";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { Box as BoxMui } from "@mui/material";

import { Box } from "@chakra-ui/react";
import { MenuProfile } from "../MenuProfile/MenuProfile";
import { useNavigate } from "react-router-dom";
import {
  changeItineraryStatus,
  getAllItinerariesFromUserToken,
} from "../../services/Itineraries/service";
import { Itinerary } from "../../services/Itineraries/type";

const Link = styled.div`
  cursor: pointer;
  font-weight: bold;
  user-select: none;
`;

export const MyScripts: FC = () => {
  const navigate = useNavigate();

  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<Itinerary[]>(() => itineraries);
  let counterControlApiGet = 0;

  const getItineraries = useCallback(async () => {
    counterControlApiGet += 1;
    if (counterControlApiGet === 1) {
      setLoading(true);
      const itinerariesResponse = await getAllItinerariesFromUserToken();
      setItineraries(itinerariesResponse);
      setTableData(itinerariesResponse);
      setTimeout(() => setLoading(false), 1000);
    }
  }, []);

  useEffect(() => {
    getItineraries();
  }, []);

  const columns = useMemo<MRT_ColumnDef<Itinerary>[]>(
    () => [
      {
        accessorKey: "itinerary_name",
        header: "Roteiro",
      },
      {
        accessorKey: "created_at",
        header: "Data",
        Cell: ({ renderedCellValue }: any) => (
          <>{moment(renderedCellValue).format("DD/MM/YYYY")}</>
        ),
      },
    ],
    []
  );

  const handleDeleteRow = useCallback(
    async (row: MRT_Row<Itinerary>) => {
      if (
        !confirm(
          `Tem certeza eque deseja apagar o roteiro ${row.getValue(
            "itinerary_name"
          )}?`
        )
      ) {
        return;
      }
      setLoading(true);
      const isChangedStatus = await changeItineraryStatus(
        row.original.itinerary_id,
        "disable"
      );
      if (isChangedStatus) {
        tableData.splice(row.index, 1);
        setTableData([...tableData]);
        setLoading(false);
      }
    },
    [tableData]
  );

  return (
    <main className="w-full  h-screen bg-black flex flex-col items-center overflow-auto">
      <div
        className="w-1200 h-90"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className=" flex items-center justify-between px-14 py-9">
          <MenuProfile />
        </div>
      </div>

      <div className="w-1200 h-20 bg-white -mt-56 flex items-center justify-between">
        <span className="text-GL300 text-2xl font-semibold px-8">
          Meus Roteiros
        </span>
      </div>

      <Box className="w-1200 bg-white mt-6">
        <MaterialReactTable
          columns={columns}
          data={tableData || []}
          state={{ isLoading: loading }}
          enableGlobalFilter={false}
          enableTopToolbar={false}
          enableToolbarInternalActions={false}
          enableSorting={false}
          enableSortingRemoval={false}
          enableMultiSort={false}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableColumnVirtualization={false}
          positionActionsColumn="last"
          enableRowActions
          localization={MRT_Localization_PT_BR}
          renderRowActions={({ row }) => (
            <BoxMui sx={{ display: "flex", gap: "1rem" }}>
              <Link
                onClick={() =>
                  navigate(`/roteiro/${row.original.itinerary_id}`)
                }
                style={{ color: "blue" }}
              >
                Abrir
              </Link>
              <Link
                style={{ color: "red" }}
                onClick={() => handleDeleteRow(row)}
              >
                Excluir
              </Link>
            </BoxMui>
          )}
        />
      </Box>
    </main>
  );
};
