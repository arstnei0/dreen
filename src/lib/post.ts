// await Astro.glob('./post/*.md')

import type { MarkdownInstance, MDXInstance } from "astro"
import dayjs from "dayjs"

export const getPosts = (posts: MarkdownInstance<Record<string, any>>[]) =>
	import.meta.env.PROD
		? posts.filter((post) => !post.frontmatter.draft)
		: posts

export function getSortedPosts(
	result: MarkdownInstance<Record<string, any>>[]
) {
	const posts = getPosts(result)

	return posts.sort((a: any, b: any) =>
		dayjs(a.frontmatter.pubDate).isBefore(dayjs(b.frontmatter.pubDate))
			? 1
			: -1
	)
}
