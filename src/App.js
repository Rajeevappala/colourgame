import React, { useState } from "react";

import {Grid , Cell ,BgContainer} from "./styledComponents"

const App = () => {
  const [colors, setColors] = useState(Array(9).fill("lightgray"));
  const [clickSequence, setClickSequence] = useState([]);

  console.log(colors)
  const handleClick = (index) => {
    if (colors[index] === "green" || colors[index] === "orange") {
      return; 
    }
    console.log(index)

    const newColors = [...colors];
    newColors[index] = "green"; 
    setColors(newColors);

    const newSequence = [...clickSequence, index];
    setClickSequence(newSequence);
    if (newSequence.length === 9) {
      changeToOrange(newSequence);
    }
  };

  const changeToOrange = (sequence) => {
    let delay = 0;

    sequence.forEach((cellIndex) => {
      setTimeout(() => {
        setColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[cellIndex] = "orange";
          return updatedColors;
        });
      }, delay);
      delay += 500; 
    });
  };

  return (
    <BgContainer>
      <Grid>
      {colors.map((color, index) => (
        <Cell
          key={index}
          bgColor={color} 
          onClick={() => handleClick(index)}
        />
      ))}
    </Grid>
    </BgContainer>
    
  );
};




export default App; 
