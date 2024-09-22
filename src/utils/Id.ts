const ID_APLHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ID_APLHABET_LENGTH = ID_APLHABET.length
export const ID_LENGTH = 20

export type ID = string

export const createID = (length: number = ID_LENGTH) => {
  let id: string = ''

  while (id.length < length) id += ID_APLHABET[Math.floor(Math.random() * ID_APLHABET_LENGTH)]

  return id
}

export const createUUID = () => {
  return crypto.randomUUID()
}
