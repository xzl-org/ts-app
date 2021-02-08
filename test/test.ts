const obj = {
  200: 'success',
  404: 'not found'
}

const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) =>
  obj[key];

console.log(obj[200]);
