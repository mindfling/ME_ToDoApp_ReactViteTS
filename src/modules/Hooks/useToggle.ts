import { useState } from "react"


// todo для модалки вызываем одноразово
// назвать useModal useShowModal
// use toggle hook
const useToggle = (initState: any) => {
  const [value, setValue] = useState(initState);
  
  const toggle = () => {
    setValue(!value);
  }
  
  return [value, toggle];
}

export { useToggle };


// todo useLocalStorage
// todo useTask
