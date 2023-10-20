import { useState } from "react"

// use toggle hook
const useToggle = (initState: any) => {
  const [value, setValue] = useState(initState);
  
  const toggle = () => {
    setValue(!value);
  }
  
  return [value, toggle];
}

export { useToggle };
