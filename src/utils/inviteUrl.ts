// https://discord.com/developers/applications/1014233853147230308/bot

const clientIdCanary = '1014233853147230308'
const clientIdProduction = '1064354910612762674'

const getLink = (clientId: string) =>
  `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=0&scope=bot%20applications.commands`

export const inviteUrl = getLink(
  process.env.ZEEPKIST_BOT_PRODUCTION ? clientIdProduction : clientIdCanary
)
