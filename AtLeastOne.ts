type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }[keyof T]

export default AtLeastOne
