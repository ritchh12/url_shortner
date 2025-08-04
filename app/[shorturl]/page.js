import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl
    
    // Check if MongoDB is available
    if (!clientPromise) {
        // Redirect to home if database is not available
        redirect('/')
        return
    }

    try {
        const client = await clientPromise;
        const db = client.db("bitlinks")
        const collection = db.collection("url")

        const doc = await collection.findOne({shorturl: shorturl})
        if(doc){
            redirect(doc.url)
        } else {
            redirect('/')
        }
    } catch (error) {
        console.error('Database error:', error)
        redirect('/')
    }

    return <div>Redirecting...</div>
}