import Dexie from "dexie";

export const db = new Dexie('myDatabase')
db.version(1).stores({
    reviews: '++id, name, review, rating'
  
})
export const dbb = new Dexie('myUsers')
dbb.version(1).stores({
    isAuth: '++id, name, email, password'
})