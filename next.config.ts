import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		inlineCss: true,
	},
}

export default nextConfig

import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev())
