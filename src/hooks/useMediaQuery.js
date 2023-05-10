import {useLayoutEffect, useRef, useState} from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    const mediaQueryList = window.matchMedia(query);
    return mediaQueryList.matches;
  });

  const mediaQueryListRef = useRef(null);

  useLayoutEffect(() => {
    mediaQueryListRef.current = window.matchMedia(query);

    const handleMediaQueryChange = (event) => {
      setMatches(event.matches);
    };

    mediaQueryListRef.current.addEventListener(
      "change",
      handleMediaQueryChange
    );

    return () => {
      mediaQueryListRef.current.removeEventListener(
        "change",
        handleMediaQueryChange
      );
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
