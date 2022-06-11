export const formatNumber = (number) =>{
    let newNumber = Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }).format(number)

    return newNumber
}