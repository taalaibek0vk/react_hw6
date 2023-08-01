import { useState } from "react";
import { regionList } from "./data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const click = index < regionList.length - 1;
  const handleNextClick = () => (click) ? setIndex(index + 1) : setIndex(0);
  const handlePrevClick = () => (click) ? setIndex(index - 1) : setIndex(0);

  let region = regionList[index]
  return (
    <div>
      <h1>{region.name}</h1>
      <div className="container">
        <button onClick={handlePrevClick}>&larr;</button>
        <img src={region.url} alt="404" />
        <button onClick={handleNextClick}>&rarr;</button>
      </div>
    </div>
  )
}