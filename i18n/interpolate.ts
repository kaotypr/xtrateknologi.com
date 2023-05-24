export const interpolate: InterpolateType = (words: string, params: object) => {
  let translation: string = words
  Object.entries(params).forEach(([key, value]) => {
    translation = words?.replace(`{{ ${key} }}`, String(value)) ?? words
  })
  return translation
}
