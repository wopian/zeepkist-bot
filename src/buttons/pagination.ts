import { ButtonInteraction } from 'discord.js'

import { PaginatedButton, PaginatedButtonAction } from '../button.js'
import { paginatedLevels } from '../components/paginated/paginatedLevels.js'
import { paginatedRecent } from '../components/paginated/paginatedRecent.js'

export const pagination: PaginatedButton = {
  name: 'paginationButton',
  type: 'pagination',
  run: async (
    interaction: ButtonInteraction,
    command: string,
    action: PaginatedButtonAction
  ): Promise<void> => {
    switch (command) {
      case 'recent': {
        await paginatedRecent({ interaction, action })
        break
      }
      case 'levels': {
        await paginatedLevels({ interaction, action })
        break
      }
    }
  }
}
