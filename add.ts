import { Key } from '../core/types/key'

export function add<D extends Partial<Record<K, V>>, K extends Key, V>(dictionary: D, key: K, value: V): D {
  return { ...dictionary, [key]: value }
}
