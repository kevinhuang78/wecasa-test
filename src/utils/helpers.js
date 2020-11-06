const convertMinutes = (duration) => {
  if (duration < 60) {
    return `${duration} minutes`
  } else {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    return minutes > 0 ? `${hours}h${minutes}` : `${hours}h`
  }
}

const convertPrice = (totalPrice) => `${totalPrice / 100}€`

export { convertMinutes, convertPrice }
