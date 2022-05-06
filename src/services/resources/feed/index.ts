import { prisma } from "libs/server"
import { Post } from "./types"

/** Feed content hanbdlers */

async function getAllPosts(): Promise<Post[]> {
	const data = await prisma.post.findMany()
	return data
}

async function createPost(data: Post) {
	await prisma.post.create({ data })
}

export { getAllPosts, createPost }