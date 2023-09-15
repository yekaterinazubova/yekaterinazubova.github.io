import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import firstFloorImg from '../../assets/floor-1.png';
import secondFloorImg from '../../assets/floor-2.png';
import thirdFloorImg from '../../assets/floor-3.png';

import './Map.css';


const Map: React.FC = () => {
  const [floor, setFloor] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setFloor(Number(value));
  };

  const imgMap: Record<number, any> = {
    1: firstFloorImg,
    2: secondFloorImg,
    3: thirdFloorImg,
  };

  return <>
    <h2>Карта областной специализированной IT-школы-лицея </h2>
    <Divider light />
    <FormControl className="map__form-control_floor">
      <RadioGroup
        row
        name="row-radio-buttons-group"
        value={floor}
        onChange={handleChange}
      >
        <FormControlLabel value={1} control={<Radio />} label="1 этаж" />
        <FormControlLabel value={2} control={<Radio />} label="2 этаж" />
        <FormControlLabel value={3} control={<Radio />} label="3 этаж" />
      </RadioGroup>
    </FormControl>
    <Divider light />
    <div className="map__img_container">
      <img className="map__img" src={imgMap[floor]} alt={`floor-${floor}`} />
    </div>
  </>;
}

export default Map;