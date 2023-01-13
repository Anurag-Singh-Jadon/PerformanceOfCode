import {
  Button,
  ButtonGroup,
  Checkbox,
  Radio,
  Slider,
  Select,
  MenuItem,
  TextField,
  Switch
} from "@mui/material";
import React, { useState } from "react";
import Delete from "@mui/icons-material/Delete";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Materialui = () => {
  const [color, setColor] = useState("primary");
  const [disabledbtn, setDisabled] = useState(false);
  const [name, setName] = useState([]);
  const [gender, setGender] = useState("");
  const [rslider, setRslider] = useState([40, 150]);
  const [course, setCourse] = useState("");
  const test = () => {
    setColor("secondary");
  };
  const testdisabled = () => {
    setDisabled(true);
  };

  const getValue = (e) => {
    let data = name;
    data.push(e.target.value);
    console.log(data)
    setName(data)
  };

  const testRadio = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };

  const mark = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 100,
      label: "middle",
    },
    {
      value: 200,
      label: "stop",
    },
    {
      value: 45,
      label: "cus 45",
    },
  ];

  const sliderValue = (e, val) => {
    console.log(val);
  };

  const updaterangesliderValue = (e, item) => {
    setRslider(item);
  };

  const updateMenuValue = (e,val) =>{
    console.log(e.target.value)
    setCourse(e.target.value)
  }

  const getData = (e) =>{
    console.log(e.target.value)
  }

  const getSwitchValue = (e,val) =>{
        console.log(val)
  }

  return (
    <div>
      {/* button */}
      <Button variant="text" color={color}>
        Text
      </Button>
      <Button variant="contained" onClick={test} endIcon={<Delete />}>
        Contained
      </Button>
      <Button
        variant="outlined"
        color={color}
        onClick={() => alert("Hello all")}
      >
        Outlined
      </Button>
      <Button variant="outlined" color={color}>
        Text
      </Button>

      {/* Text Button */}

      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button
        variant="outlined"
        disabled={disabledbtn}
        size="small"
        startIcon={<Delete />}
        onClick={() => {
          testdisabled();
        }}
      >
        Disabled ho gaya
      </Button>

      {/* Button Group */}
      <ButtonGroup variant="contained" color="secondary" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      {/* Checkbox */}
      <Checkbox />
      <Checkbox
        color="default"
        value="anil"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="default"
        value="saurabh"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="default"
        value="anurag"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="default"
        value="sachin"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="default"
        value="Rahul"
        indeterminate
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        value="Rahul"
        icon={<FavoriteBorder />}
        color="secondary"
        checkedIcon={<Favorite />}
        onChange={(e) => {
          getValue(e);
        }}
      />

      {/* Radio Button */}
      <div>
        <span>Male</span>
        <Radio
          color="primary"
          value="male"
          onChange={testRadio}
          checked={gender === "male"}
        />
      </div>
      <div>
        <span>Female</span>
        <Radio
          color="primary"
          value="Female"
          onChange={testRadio}
          checked={gender === "Female"}
        />
      </div>
      <div>
        <span>Female</span>
        <Radio
          color="primary"
          value="other"
          onChange={testRadio}
          checked={gender === "other"}
        />
      </div>

      {/* Slider */}
      <div style={{ width: 300, margin: 40, height: 100 }}>
        <Slider
          color="secondary"
          defaultValue={90}
          valueLabelDisplay="auto"
          step={10}
          max={200}
          marks={mark}
          onChange={sliderValue}
          orientation="vertical"
        />
      </div>

      {/* Range Slider */}

      <div style={{ width: 300, margin: 40 }}>
        <Slider value={rslider} max={200} onChange={updaterangesliderValue} />
      </div>

      {/* Select & Select Box */}
      <div>
        <Select value={course} displayEmpty onChange={updateMenuValue}>
          <MenuItem value="">Select Course</MenuItem>
          <MenuItem value={1}>Node</MenuItem>
          <MenuItem value={2}>React</MenuItem>
          <MenuItem value={3}>React Native</MenuItem>
          <MenuItem value={4}>JavaScript</MenuItem>
        </Select>
      </div>
         <div>
       {/* TextField */}

       <TextField
       label="enter name"
       color="secondary"
       variant="filled"
       type={"password"}
       onChange={getData}/>
        </div>

        {/* Switch */}
     <Switch color="primary" size="medium" onChange={getSwitchValue}/>

       
    </div>
  );
};

export default Materialui;
