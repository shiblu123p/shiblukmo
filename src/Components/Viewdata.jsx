import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Viewdata = () => {
    var[users,setUsers]=useState([])
    var[loading,setloading] = useState(false)



    useEffect(()=>{
        setloading(true)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res)
        setUsers(res.data)
        setloading(false)
    })
    .catch(err=>console.log(err))
},[])
//       

// const loaddata=()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{
//         console.log(res)
//         setUsers(res.data)
//     })
//     .catch(err=>console.log(err))
// }
  return (
    <div>
        {loading?<CircularProgress color='primary'/>:
       
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>picture</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.username}</TableCell>
                                <TableCell>{val.email}</TableCell>
                               
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>}
         {/* <Button variant='contained' onClick={loaddata}>Load data</Button> */}
    </div>
  )
}
