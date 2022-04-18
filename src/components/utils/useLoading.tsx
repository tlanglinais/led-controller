import LoadingSpinner from './LoadingSpinner';
// import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const useLoading =
  Component =>
  ({ ...props }) => {
    const { isLoading, error, retry, ...otherProps } = props;

    if (isLoading) return <LoadingSpinner />;
    // else if (error) return <ErrorMessage error={error} retry={retry} />;
    return <Component {...otherProps} />;
  };

export default useLoading;
