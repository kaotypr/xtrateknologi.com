export const accessor: AccessorType = (
  dictionary: DictionaryType,
  accessorString: string
) => {
  const arrAccessor = accessorString.split('.')
  const resultTarget: string = arrAccessor.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (target: any, currentPath) => {
      if (target && typeof target === 'object' && !Array.isArray(target)) {
        return target[currentPath]
      }
      return ''
    },
    dictionary
  )
  return resultTarget
}
