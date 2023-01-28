import React from 'react'
import CustomButton from './CustomButton';
import Info from './Info';

const MovieInfo = () => {
  return (
    <div>
      <Info keyInfo="Movie Name " value="Hello Ghost" />
      <Info keyInfo="Year of Release " value="Hello Ghost" />
      <Info keyInfo="Producer " value="Hello Ghost" />
      <Info keyInfo="Actors " value="Hello Ghost" />
      <CustomButton buttonText="add" onClickTask={() => console.log("Hello")} />
    </div>
  );
}

export default MovieInfo
