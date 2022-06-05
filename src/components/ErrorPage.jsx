import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
      const navigate = useNavigate()
      useEffect(()=>{
            
      })
  return (
      <div style={{width: '100%', display: 'block', justifyContent: 'center'}}>
            <div style={{ display: 'flex', flexDirection:'column'}}>
                  <h1 style={{color: '#FFF', alignSelf: 'center'}}>Don't choose the darkness, go to the Jedi path</h1>
                  <Button  style={{ width:'10%',marginTop: 10, marginBottom: 100, alignSelf: 'center'}}variant='outlined'  onClick={()=>{navigate('/')}}>Go Back</Button>
            </div>
      </div>
  )
}

export default ErrorPage