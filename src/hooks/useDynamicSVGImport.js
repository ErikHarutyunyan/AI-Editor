import { useEffect, useRef, useState } from "react";

const useDynamicSVGImport = ({ name, onCompleted, onError }) => {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { ReactComponent } = await import(`../assets/icons/${name}.svg`);
        ImportedIconRef.current = ReactComponent;
        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
};

export default useDynamicSVGImport;
