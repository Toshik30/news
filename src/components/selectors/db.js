import Dexie from "dexie";

export const db = new Dexie('myDatabase')
db.version(1).stores({
    reviews: '++id, name, review, rating, pathname'
  
})
export const dbb = new Dexie('myUsers')
dbb.version(2).stores({
    isAuth: '++id, name, email, password'
})