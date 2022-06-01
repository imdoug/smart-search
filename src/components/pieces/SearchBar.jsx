import { Paper, InputBase, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { api } from "../../data/data";
import { useState } from "react";

const Input = () => {

  const [filteredData, setFilteredData] = useState('');
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  
  const handleFilter = (e) =>{
    if(e.currentTarget.value.length === 0){
      setShow(false)
    }else{
      setShow(true)
    }
      const searchWord = e.currentTarget.value
      const newFilter = api.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
      })
      setFilteredData(newFilter)
    }
    const goTo = (id)=>{
        navigate(`${id}`)
    }

  return (
    <>
      <Container style={{ padding: "0px 10px" }}>
        <Paper
          className="search"
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            maxWidth: 500,
            margin: "0 auto",
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            padding: "5px 10px",
          }}
        >
          {/* input */}
          <InputBase
            sx={{ ml: 1, flex: 1, height: 40 }}
            placeholder="Search Star Wars Movies"
            inputProps={{ "aria-label": "search start wars" }}
            onChange={(e)=>{handleFilter(e)}}
          />
        </Paper>
      </Container>
      <div
        className={show ? "result" : 'hidden'}
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "start",
          border: "1px solid white",
          maxWidth: 518,
          margin: "0 auto",
          backgroundColor: "#FFF",
          maxHeight: 200,
          marginBottom: 110,
        }}
      >
        { !show ? <></> :
          filteredData.slice(0,6).map((value, key) => (
            <>
              <div
                className="item"
                key={key}
                style={{ textAlign: "start", fontSize: 20, padding: "15px 10px" }}
                onClick={() =>{goTo(value.id)}}
              >
                {value.title}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Input;
