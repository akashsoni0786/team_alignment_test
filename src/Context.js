import React from "react";

export const contextname = React.createContext();
const Context = (props) => {
  const [data, setData] = React.useState([]);
  const [inp, setInp] = React.useState("");
  const [row1, setRow1] = React.useState("");
  const [row2, setRow2] = React.useState("");
  const [row3, setRow3] = React.useState("");

  React.useEffect(() => {
    const fetchapi = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/photos";
        const response = await fetch(url);
        const res = response.json();
        res.then((result) => {
          setData(result);
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchapi();
  }, []);
  return (
    <contextname.Provider
      value={{
        data: data,
        setData: setData,
        inp: inp,
        setInp: setInp,
        row1: row1,
        setRow1: setRow1,
        row2: row2,
        setRow2: setRow2,
        row3: row3,
        setRow3: setRow3,
      }}
    >
      {props.children}
    </contextname.Provider>
  );
};

export default Context;
