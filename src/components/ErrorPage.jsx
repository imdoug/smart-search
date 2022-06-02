import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
      const navigate = useNavigate()
      useEffect(()=>{
            
      })
  return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <div>
                  <h1>Don't go to the path of darkness, go path to the Jedi path</h1>
                  <Button  style={{marginTop: 10, marginBottom: 10}}variant='outlined'  onClick={()=>{navigate('/')}}>Go Back</Button>
            </div>
      </div>
  )
}

export default ErrorPage