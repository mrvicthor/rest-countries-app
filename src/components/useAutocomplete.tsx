import { useState, useEffect } from "react";

const useAutocomplete = (value: string, delay: number = 1000) => {
  const [debounceVal, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeoutRef);
  }, [value]);

  return debounceVal;
};

export default useAutocomplete;
