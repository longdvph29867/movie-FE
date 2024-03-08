import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '../Toolkits/spinnerSlice';

export const useLoading = () => {
  const dispatch = useDispatch();

  const startSpinner = () => {
    dispatch(startLoading());
  };

  const stopSpinner = () => {
    dispatch(stopLoading());
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return { startSpinner, stopSpinner };
};
