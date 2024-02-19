import { useEffect } from 'react';

const useWindowResize = (callback: () => void) => {
  useEffect(() => {
    callback();
    window.addEventListener('resize', callback);

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, [callback]);
};

export default useWindowResize;