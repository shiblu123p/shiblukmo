import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Viewdata } from './Viewdata'
import { Adddata } from './Adddata'

export const Appbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>First app</Typography>
                <Button variant='contained' color='success'><Link to={'/'} style={{textDecoration:'none'}}>View</Link></Button>
                <Button variant='contained' color='error'><Link to={'/add'} style={{textDecoration:'none'}}>ad data</Link></Button>
            </Toolbar>
        </AppBar>
        npm i react-router-dom
    </div>
  )
}