import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({}) // {} means to get everything

    return new Response(JSON.stringify(properties), { status: 200 })
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 })
  }
}

// export const POST