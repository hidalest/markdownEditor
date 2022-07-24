import { useCallback, useState } from 'react';

const useFetch = (requestConfig, applyAction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const sendRequest = async () => {
    try {
      setIsLoading(true);
      setIsError(null);
      const response = await fetch(
        'https://react-markdownfiles-default-rtdb.firebaseio.com/files.json',
        {
          method: requestConfig.method || 'GET',
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong, please try again later');
      }

      const data = await response.json();

      applyAction(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message || 'Something Went wrong :(');
    }
  };

  return {
    isLoading,
    isError,
    sendRequest,
  };
};

export default useFetch;
