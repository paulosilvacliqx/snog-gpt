import axios from "axios"
import { DataTangran } from "../../contexts/ContextsFiles/Tangran"

export async function handleGetListTangran(
  accessToken: string, setDataTangran: React.Dispatch<React.SetStateAction<DataTangran[]>>
) {
  if (accessToken) {
    await axios.get(`${import.meta.env.VITE_APP_WEB_API}/tangram/list/`, {
      headers: {
        'Authorization': accessToken
      }
    })
      .then((response) => {
        setDataTangran(response.data.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}