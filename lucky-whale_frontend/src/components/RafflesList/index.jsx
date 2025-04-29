import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Container, ViewIcon, Slide } from './styles'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUser } from '../../contexts/UserContext'
import { useRaffle } from '../../contexts/RaffleContext'

export function RafflesList({ selectedCategory, selectedStatus }) {
  const navigate = useNavigate()
  const { userId } = useUser()
  const { getRafflesByUser, rafflesByUser } = useRaffle()

  useEffect(() => {
    if (userId) {
      getRafflesByUser(userId)
    }
  }, [getRafflesByUser, userId])

  const translateStatus = (status) => {
    switch (status) {
      case 'Active':
        return 'Ativa'
      case 'Finished':
        return 'Finalizada'
      case 'Canceled':
        return 'Cancelada'
    }
  }

  const handleSelectRaffle = (raffle) => {
    navigate('/admin/raffle-update', {
      state: {
        selectedRaffle: raffle,
      },
    })
  }

  return (
    <Container>
      <Slide />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className='table-head'>Título</TableCell>
              <TableCell className='table-head'>Bilhetes</TableCell>
              <TableCell className='table-head'>Arrecadação</TableCell>
              <TableCell className='table-head'>Status</TableCell>
              <TableCell className='table-head'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rafflesByUser.length > 0 ? (
              rafflesByUser.map((raffle) => (
                <TableRow
                  key={raffle.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className='size-collumn'>{raffle.title}</TableCell>
                  <TableCell>{raffle.ticketsAmount}</TableCell>
                  <TableCell>{raffle.moneyAmount}</TableCell>
                  <TableCell>{translateStatus(raffle.status)}</TableCell>
                  <TableCell>
                    <ViewIcon onClick={() => handleSelectRaffle(raffle)} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} style={{ textAlign: 'center' }}>
                  Nenhuma rifa encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
