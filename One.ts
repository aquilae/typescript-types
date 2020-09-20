type One<T, K = keyof T> = K extends keyof T
  ? { [k in keyof T]?: k extends K ? T[K] : never } & { [k in K]-?: T[K] }
  : never

export default One
