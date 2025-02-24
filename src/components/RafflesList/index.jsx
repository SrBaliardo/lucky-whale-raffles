import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import { Container, ViewIcon } from './styles'
import { useNavigate } from 'react-router-dom'

function createData(id, title, tickets_amount, money_amount, status) {
  return { id, title, tickets_amount, money_amount, status }
}

const rows = [
  createData(100001, 'Frozen yoghurt', 159, 'R$ 600,00', 'Ativa'),
  createData(
    100002,
    'Ice cream sandwichIce cream sandwich',
    237,
    'R$ 900,00',
    'Ativa',
  ),
  createData(100003, 'EclairEclair', 262, 'R$ 160,00', 'Finalizada'),
  createData(100004, 'Cupcake', 305, 'R$ 370,00', 'Ativa', <ViewIcon />),
  createData(
    100005,
    'GingerbreadGingerbreadGingerbreadGingerbread',
    356,
    'R$ 160,00',
    'Finalizada',
  ),
  createData(100006, 'Frozen yoghurt', 159, 'R$ 600,00', 'Ativa', <ViewIcon />),
  createData(
    100007,
    'Ice cream sandwichIce cream sandwich',
    237,
    'R$ 900,00',
    'Ativa',
  ),
  createData(100008, 'EclairEclair', 262, 'R$ 160,00', 'Finalizada'),
  createData(100009, 'Cupcake', 305, 'R$ 370,00', 'Ativa', <ViewIcon />),
  createData(
    100010,
    'GingerbreadGingerbreadGingerbreadGingerbread',
    356,
    'R$ 160,00',
    'Finalizada',
  ),
  createData(100011, 'Frozen yoghurt', 159, 'R$ 600,00', 'Ativa', <ViewIcon />),
  createData(
    100012,
    'Ice cream sandwichIce cream sandwich',
    237,
    'R$ 900,00',
    'Ativa',
  ),
  createData(100013, 'EclairEclair', 262, 'R$ 160,00', 'Finalizada'),
  createData(100014, 'Cupcake', 305, 'R$ 370,00', 'Ativa', <ViewIcon />),
  createData(
    100015,
    'GingerbreadGingerbreadGingerbreadGingerbread',
    356,
    'R$ 160,00',
    'Finalizada',
  ),
]

export function RafflesList() {
  const navigate = useNavigate()

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className='size-collumn'>Título</TableCell>
              <TableCell className='unshow'>Bilhetes</TableCell>
              <TableCell className='unshow'>Arrecadação</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='size-collumn'>{row.title}</TableCell>
                <TableCell className='unshow'>{row.tickets_amount}</TableCell>
                <TableCell className='unshow'>{row.money_amount}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <ViewIcon
                    onClick={() => {
                      navigate('/admin/raffle-update')
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
