// Code your solution here
const findMatching = (drivers, string) => {
  return drivers.filter( d => {
    return d.toUpperCase() == string.toUpperCase();
  })
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter( d => d.startsWith(string))
}
