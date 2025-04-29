import prisma from '../config/prismaClient.js'

export const updateTerritory = async (req, res) => {
  try {
    const userId = req.user.id
    const { country, stateScope, states, cityScope } = req.body

    // Verifica se já existe um território cadastrado para o usuário
    const existingTerritory = await prisma.territory.findUnique({
      where: { userId },
    })

    let updatedTerritory

    if (existingTerritory) {
      // Atualiza território existente
      updatedTerritory = await prisma.territory.update({
        where: { userId },
        data: { country, stateScope, states, cityScope },
      })
    } else {
      // Cria novo território (caso não exista)
      updatedTerritory = await prisma.territory.create({
        data: { userId, country, stateScope, states, cityScope },
      })
    }

    res
      .status(200)
      .json({ message: 'Território atualizado com sucesso!', updatedTerritory })
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao atualizar território' })
  }
}

export const registerTerritoryData = async (req, res) => {
  try {
    const userId = req.user.id

    const { country, stateScope, states, cityScope } = req.body

    const territory = await prisma.territory.create({
      data: {
        userId: user.id,
        country: 'allCountries',
        stateScope: null,
        states: [],
        cityScope: null,
      },
    })

    res.status(201).json(territory)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao cadastrar território.' })
  }
}
