import React, { useEffect } from 'react';
import { api_key, popular, imagePath, videoPath } from './utils';

const ViewMovie = () => {
  useEffect(() => {
    fetch(
      `${videoPath}${window.location.search.replace(
        '?id=',
        ''
      )}?api_key=${api_key}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default ViewMovie;
