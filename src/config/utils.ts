export const convertDateStringToDate = (str: string): string => {
  const year = str.slice(0, 4)
  const month = str.slice(4, 6)
  const date = str.slice(6, 8)
  return `${year}-${month}-${date}`
}
