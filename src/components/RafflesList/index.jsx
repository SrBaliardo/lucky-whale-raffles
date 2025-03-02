import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Container, ViewIcon, Slide } from './styles'
import { useNavigate } from 'react-router-dom'

function createData(id, title, tickets_amount, money_amount, status) {
  return { id, title, tickets_amount, money_amount, status }
}

const rows = [
  createData(100001, 'Tratamento do Paulim', 159, 'R$ 600,00', 'Ativa'),
  createData(
    100002,
    'Comprar mantimentos para moradores de rua',
    237,
    'R$ 900,00',
    'Ativa',
  ),
  createData(100003, 'dogS.O.S', 262, 'R$ 160,00', 'Finalizada'),
  createData(100004, 'Casa do vovô', 305, 'R$ 370,00', 'Ativa', <ViewIcon />),
  createData(
    100005,
    'Comprar uma cadeira de rodas nova pra Leandrinha',
    356,
    'R$ 160,00',
    'Finalizada',
  ),
  createData(100006, 'Frozen yoghurt', 159, 'R$ 600,00', 'Ativa', <ViewIcon />),
  createData(
    100007,
    'Preciso voltar pra terrinha, me ajudem',
    237,
    'R$ 900,00',
    'Ativa',
  ),
  createData(100008, 'Roberto Carlos', 262, 'R$ 160,00', 'Finalizada'),
  createData(
    100009,
    'Igreja da Revoada do 15º dia',
    305,
    'R$ 370,00',
    'Ativa',
    <ViewIcon />,
  ),
]

export function RafflesList() {
  const navigate = useNavigate()

  return (
    <Container>
      <Slide />
      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className='table-head break'>Título</TableCell>
              <TableCell className='table-head'>Bilhetes</TableCell>
              <TableCell className='table-head'>Arrecadação</TableCell>
              <TableCell className='table-head'>Status</TableCell>
              <TableCell className='table-head'></TableCell>
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
