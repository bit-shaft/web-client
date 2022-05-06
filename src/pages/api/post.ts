import type { NextApiResponse, NextApiRequest } from "next"
import { createPost } from "services/resources"

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const data = JSON.parse(req.body)

		await createPost(data)
    
		return res.status(200).json({ message: "Success" })
	}
}

export default handler