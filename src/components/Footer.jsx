import { Container } from '@mui/material'
import { CopyrightOutlined } from '@mui/icons-material'

const Footer = () => {
  return (
    <Container style={{display: 'flex', alignItems: 'center', fontSize: 18, color: '#999', justifyContent: 'center'}}>
         <CopyrightOutlined style={{marginRight: 5}}/> 2022 Doug Moreira. All rights reserved.
    </Container>
  )
}

export default Footer