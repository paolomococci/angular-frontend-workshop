export interface Fruit {
  id: number
  name: string
  calories: number | null // kcal
  carbohydrate: number | null // g
  fiber: number | null // g
  sugar: number | null // g
  fat: number | null // g
  protein: number | null // g
  vitaminA: number | null // % RDA
  vitaminB1: number | null // % RDA also known as Thiamine
  vitaminB2: number | null // % RDA also known as Riboflavin
  vitaminB3: number | null // % RDA also known as Niacin
  vitaminB5: number | null // % RDA also known as Pantothenic acid
  vitaminB6: number | null // % RDA also known as Pyridoxine or Pyridoxal or Pyridoxamine
  vitaminB7: number | null // % RDA also known as Biotin
  vitaminB9: number | null // % RDA also known as Folic acid or Folate
  vitaminB12: number | null // % RDA also known as Cobalamin
  vitaminC: number | null // % RDA
  vitaminD: number | null // % RDA
  vitaminE: number | null // % RDA
  vitaminK: number | null // % RDA
  calcium: number | null // % RDA
  copper: number | null // % RDA
  iron: number | null // % RDA
  magnesium: number | null // % RDA
  manganese: number | null // % RDA
  phosphorus: number | null // % RDA
  potassium: number | null // % RDA
}
