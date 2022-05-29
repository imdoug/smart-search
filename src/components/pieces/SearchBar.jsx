import { Paper, InputBase, IconButton, Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { api } from '../../data/data'

const Input = () => {
  return (
        <>
        <Container style={{padding: '0px 10px'}}>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 500,margin: '0 auto', borderRadius: 30, padding: '5px 10px'}}>
                  {/* input */}
                  <InputBase 
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Star Wars Movies"
                        inputProps={{ 'aria-label': 'search start wars' }}
                  />
                  {/* search btn */}
                  <IconButton 
                        type="submit" 
                        sx={{ p: '10px' }} 
                        aria-label="search">
                        <SearchIcon />
                  </IconButton>
                  {/*  */}
            </Paper>
      </Container>
      <div style={{display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'start', border: '1px solid white', maxWidth: 500, margin: '0 auto', padding : '2px 5px'}}>
            {api.map((value, key)=>(
                  <>
                        <div key={key} style={{marginLeft: 10, color:'#fff', textAlign: 'start', fontSize: 20, padding: '10px 0px'}}>{value.title}</div>
                  </>
            ))}
      </div>
        </>
  )
}

export default Input