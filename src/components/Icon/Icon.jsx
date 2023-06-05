import { useCallback, memo } from "react";

// hook
import useDynamicSVGImport from "../../hooks/useDynamicSVGImport";

const Icon = memo(({ name, ...rest }) => {
  const handleIconCompleted = useCallback(
    (iconName) => true,
    // console.log(`${iconName} successfully loaded`)
    []
  );
  const handleIconError = useCallback((err) => console.error(err.message), []);

  const { error, loading, SvgIcon } = useDynamicSVGImport({
    name,
    onCompleted: handleIconCompleted,
    onError: handleIconError,
  });
  if (error) {
    return error.message;
  }

  if (loading) {
    return "Loading...";
  }

  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }

  return null;
});

export default Icon;
