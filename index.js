// Code your solution here
const findMatching = function(drivers, string) {
  drivers.filter( d => {
    return d.toUpperCase() === string.toUpperCase();
  })
}
