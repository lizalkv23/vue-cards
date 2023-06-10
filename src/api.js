import axios from "axios"

async function mealCard() {
  try {
    const response = await axios(
      " https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
    )
    const data = await response.data
    const res = await data.meals
    return res
  } catch (error) {
    alert(error)
  }
}
const result = await mealCard()
export default result
