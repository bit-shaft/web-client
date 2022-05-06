import { Text } from "components/elements"
import { GetServerSideProps } from "next"
import { getAllPosts } from "services/resources"

export const getServerSideProps: GetServerSideProps = async () => {
	const posts = await getAllPosts()

	return { props: { posts } }
}

function Home({ posts }: any) {
	return <Text>{JSON.stringify(posts, null, 4)}</Text>
}

export default Home