import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    let { url, shorturl } = body;

    if (!shorturl || shorturl.trim() === "") {
      return Response.json({
        success: false,
        error: true,
        message: "shorturl required",
      });
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "already claimed",
      });
    }

    await collection.insertOne({ url, shorturl });

    return Response.json({
      success: true,
      error: false,
      message: "finished",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: true,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
