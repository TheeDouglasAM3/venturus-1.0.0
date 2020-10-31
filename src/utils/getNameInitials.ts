export const getNameInitials = (name: string): string => {
  const regexMatch = name.match(/\b\w/g) || []
  const initials = ((regexMatch.shift() || '') + (regexMatch.pop() || '')).toUpperCase()
  return initials
}
