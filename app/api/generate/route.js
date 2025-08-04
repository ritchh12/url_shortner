
import clientPromise from "@/lib/mongodb"

export async function POST(request) {      
    // Check if MongoDB is available
    if (!clientPromise) {
        return Response.json({
            success: false, 
            error: true, 
            message: 'Database connection not available'
        }, { status: 500 })
    }

    try {
        const body = await request.json()
        const client = await clientPromise;
        const db = client.db("bitlinks")
        const collection = db.collection("urls")

        // check if the url exist 
        const doc = await collection.findOne({shorturl: body.shorturl})
        if(doc){
            return Response.json({success: false, error: true, message: 'URL already exists!' })
        }

        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })

        return Response.json({success: true, error: false, message: 'URL generated successfully' })
    } catch (error) {
        console.error('Database error:', error)
        return Response.json({
            success: false, 
            error: true, 
            message: 'Database error occurred'
        }, { status: 500 })
    }
}