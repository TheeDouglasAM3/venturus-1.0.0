export const teamValidation = (
  name: string,
  website: string,
  numberTeamPlayers: number,
)
  : boolean => name !== '' && website !== '' && numberTeamPlayers === 11
