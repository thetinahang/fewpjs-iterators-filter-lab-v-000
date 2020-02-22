// Code your solution here
const findMatching = (drivers, string) => {
  drivers.filter( d => {
    return d.toUpperCase() == string.toUpperCase();
  })
}
