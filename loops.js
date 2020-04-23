  const array = [1, 2]

function forLoop(){
  const t = 25
  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }
  return [array, t]
}
