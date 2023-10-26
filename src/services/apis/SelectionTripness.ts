import axios from "axios"
import { DataSelection } from "../../contexts/ContextsFiles/SelectionTripness"

export async function handleGetSelectionTripness(
  accessToken: string, setAllSelection: React.Dispatch<React.SetStateAction<DataSelection[]>>
) {
  if (accessToken) {
    await axios.get(
      `${import.meta.env.VITE_APP_WEB_API}/experience/tripness_selection/`, {
      headers: {
        'Authorization': accessToken
      }
    })
      .then((response) => {
        setAllSelection(response.data.data)
      })
  }
}