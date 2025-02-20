import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Container, ViewIcon } from './styles'

function createData(name, calories, fat, carbs, protein, view) {
  return { name, calories, fat, carbs, protein, view }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, <ViewIcon />),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, <ViewIcon />),
  createData('Eclair', 262, 16.0, 24, 6.0, <ViewIcon />),
  createData('Cupcake', 305, 3.7, 67, 4.3, <ViewIcon />),
  createData('Gingerbread', 356, 16.0, 49, 3.9, <ViewIcon />),
]

export function RafflesList() {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell className='unshow'>Comprados</TableCell>
              <TableCell className='unshow'>Disponíveis</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Sorteio</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell className='unshow'>{row.fat}</TableCell>
                <TableCell className='unshow'>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>{row.view}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
