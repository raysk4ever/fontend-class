const user = {
    name: 'john',
    age: 10,
    address: {
      city: 'cityname'
    },
    hobbies: [1,2 ,3,4 ]
}

user.address.city // static
user['address']['city'] // dynamic

const keys = Object.keys(user)
console.log(keys)

const values = Object.values(user)
console.log(values)

const entries = Object.entries(user)
console.log('entries', entries)
