// lib/mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let client
let clientPromise

// Create a function that returns the client promise or null
function getClientPromise() {
  if (!uri) {
    console.warn('MongoDB URI not available')
    return null
  }

  const options = {
    // Modern connection options
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
