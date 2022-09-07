import { Button, FormControlLabel, Switch } from "@mui/material";
import React from "react";
import Album from "./Album";
import { contextname } from "./Context";
import List from "./List";

const Counter = () => {
  const contxt = React.useContext(contextname);
  const [show, setShow] = React.useState(false);
  const [fetchlist, setFetchlist] = React.useState(false);
  const [back, setBack] = React.useState('white');
  const [txt, setTxt] = React.useState('black');
  const fetchalbum = () => {
    setFetchlist(true);
  };

  const theme =(e)=>{
    if(e.target.checked){
        setBack("black");
        setTxt("white");
    }
    else{
        setBack("white");
        setTxt("black");
    }
    
  }
  return (
    <div style={{ backgroundColor: back, padding: "50px",width:"900px" }}>
      <div className="inputandswitch">
        <input
          onChange={(e) => {
            contxt.setInp(e.target.value);
            setFetchlist(false);
            setShow(true);
          }}
          className="inputfield"
          type="Number"
          placeholder="Enter id here..."
        />
        <FormControlLabel
          control={<Switch defaultChecked={false} onChange={theme} />}
          label="Change theme"
          sx={{color:txt}}
        />
      </div>

      {show ? <List alldata={contxt.data} textclr={txt} backtab={back} listnumber={contxt.inp} /> : <></>}
      {show ? (
        <Button sx={{margin:"50px 0px"}} onClick={fetchalbum} variant="contained">
          Fetch Album
        </Button>
      ) : (
        <></>
      )}

      {fetchlist ? (
        <>
          <Album textclr={txt} backtab={back} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Counter;
