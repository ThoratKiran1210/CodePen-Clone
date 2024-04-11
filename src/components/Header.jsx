import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material'


// const icon = '../../public/codepen.png'
const icon = require('./codepen.png')

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
  return (
    <>
        <Container>
            <Toolbar style={{backgroundColor: '#000', height:'9vh'}}>
                <img src={icon} alt="" width={'30px'} />
                 <p style={{fontSize: '1.5rem',fontFamily:'cursive', padding: '10px'}}>CodePen</p>
            </Toolbar>
        </Container>
    </>
  )
}

export default Header