type UnwrapArray<T> = T extends Array<any>
  ? {
      flatten: UnwrapArray<T[number]>
      exit: T
    }[T extends Array<any> ? 'flatten' : T extends ReadonlyArray<any> ? 'flatten' : 'exit']
  : T extends ReadonlyArray<any>
  ? {
      flatten: UnwrapArray<T[number]>
      exit: T
    }[T extends Array<any> ? 'flatten' : T extends ReadonlyArray<any> ? 'flatten' : 'exit']
  : T
  
export default UnwrapArray
