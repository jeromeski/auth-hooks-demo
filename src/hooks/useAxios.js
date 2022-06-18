import { useEffect, useState } from "react";

const useAxios = () => {
  const [response, setResponse] = useState();
  const [success, setSuccess] = useState();
  const [controller, setController] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getResponse = async (configObj, value) => {
    const { axiosInstance, url, method, requestConfig = {}, data } = configObj;
    setError("");
    setSuccess("");
    setIsLoading(true);
    try {
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](
        url,
        {
          ...requestConfig,
          signal: ctrl.signal,
          ...data
        },
        value
      );
      setResponse(res.data);
      setIsLoading(false);
      setSuccess(true);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (controller && controller.abort) {
        return controller.abort();
      }
    };
  });

  return [response, isLoading, error, success, getResponse];
};

export default useAxios;