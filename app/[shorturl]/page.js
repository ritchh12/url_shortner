import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

// Required for static export
export async function generateStaticParams() {
    // Return empty array for now - this will generate pages on demand
    return []
}

export default async function Page({ params }) {
    const shorturl = (await params).shorturl
    
    try {
        // Check if MongoDB is available
        if (!clientPromise) {
            console.log("No MongoDB connection, redirecting to home")
            redirect('/')
            return
        }

        const client = await clientPromise;
        const db = client.db("bitlinks")
        const collection = db.collection("url")

        const doc = await collection.findOne({shorturl: shorturl})
        if(doc && doc.url){
            console.log("Found URL, redirecting to:", doc.url)
            redirect(doc.url)
        } else {
            console.log("URL not found, redirecting to home")
            redirect('/')
        }
    } catch (error) {
        console.error('Database error:', error)
        redirect('/')
    }

    return <div>Redirecting...</div>
}