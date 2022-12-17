import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: "slack-dark",
		},
	},
})
