import { sauces, bases, ingredients } from './ingredients'

const getRandomElement = list => list[Math.floor(Math.random() * list.length)]

const getRandomIngredients = () => {
  const result = new Set()
  while (result.size < 4) {
    result.add(getRandomElement(ingredients))
  }
  return result
}

export const randomSalad = () => {
  const sauce = getRandomElement(sauces)
  const base = getRandomElement(bases)
  const [lastIngredient, ...ingredients] = getRandomIngredients()

  return {
    base,
    sauce,
    ingredients: `${ingredients.join(', ')} y ${lastIngredient}`
  }
}
