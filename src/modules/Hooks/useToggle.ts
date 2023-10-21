import { useState } from "react"


// todo для модалки вызываем одноразово только для закрытия
// назвать useModal useShowModal
export const useToggle = (initState: any) => {
  const [value, setValue] = useState(initState);
  const toggle = () => {
    setValue(!value);
  }
  return [value, toggle];
}
