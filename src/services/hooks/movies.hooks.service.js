import {useState, useCallback} from 'react';
import {
  getUpcomingMovies,
  getMovieDetail,
  getMovieImages,
  getSearchMovies,
} from '../api/movies.api.service';

export const useGetUpcomingMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([null]);

  async function execute(options, callback) {
    try {
      setIsLoading(true);
      if (options)
        getUpcomingMovies(
          options,
          response => {
            setData(response);
            callback(response);
            setIsLoading(false);
          },
          error => {
            setError(error);
            setIsLoading(false);
          },
        );
      else
        getUpcomingMovies(
          response => {
            setData(response);
            callback(response);
            setIsLoading(false);
          },
          error => {
            setError(error);
            setIsLoading(false);
          },
        );
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  }

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};

export const useGetMovieDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function execute(id, callback) {
    try {
      setIsLoading(true);
      getMovieDetail(
        id,
        response => {
          callback(response);
          setData(response);
          setIsLoading(false);
        },
        error => {
          setError(error);
          setIsLoading(false);
        },
      );
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  }

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};

export const useMovieImages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function execute(id, callback) {
    try {
      setIsLoading(true);
      getMovieImages(
        id,
        response => {
          callback(response);
          setData(response);
          setIsLoading(false);
        },
        error => {
          setError(error);
          setIsLoading(false);
        },
      );
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  }

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};

export const useGetSearchMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([null]);

  async function execute(query, callback) {
    try {
      setIsLoading(true);
      getSearchMovies(
        query,
        response => {
          setData(response);
          callback(response);
          setIsLoading(false);
        },
        error => {
          setError(error);
          setIsLoading(false);
        },
      );
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  }

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};
