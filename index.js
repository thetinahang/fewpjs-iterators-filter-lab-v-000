// Code your solution here
const findMatching = (drivers, string) => {
  return drivers.filter( d => {
    return d.toUpperCase() == string.toUpperCase();
  })
}
