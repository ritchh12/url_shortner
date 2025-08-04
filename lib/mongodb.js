// lib/mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = { 
  // Remove deprecated useNewUrlParser option
}

let client
let clientPromise

// Only throw error if not in build process
if (!process.env.MONGODB_URI && process.env.NODE_ENV !== 'production') {
  console.warn('Warning: MONGODB_URI not found in environment variables')
}

// Create a function that returns the client promise or null
function getClientPromise() {
  if (!process.env.MONGODB_URI) {
    console.warn('MongoDB URI not available')
    return null
  }

  if (process.env.NODE_ENV === 'development') { 
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    return global._mongoClientPromise
  } else {
    if (!clientPromise) {
      client = new MongoClient(uri, options)
      clientPromise = client.connect()
    }
    return clientPromise
  }
}

export default getClientPromise()
