/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getPopularMovies } from './services/services';

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovie(movies[0]);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Movie Name: {movie.original_title}</Text>
      <Text>Release Date: {movie.release_date}</Text>
      {error && <Text style={{ color: 'red' }}>Error in the Server</Text>}
    </View>
  );
};
export default App;
