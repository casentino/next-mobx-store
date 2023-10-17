import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
	logo: <span>next-mobx-store</span>,
	project: {
		link: 'https://github.com/shuding/nextra-docs-template',
	},
	chat: {
		link: 'https://discord.com',
	},
	docsRepositoryBase: 'https://google.com/shuding/nextra-docs-template',
	footer: {
		text: 'Nextra Docs Template',
	},
	toc: {
		float: false,
	},
	feedback: {
		content: null
	},
	editLink: {
		text: null
	}
}

export default config
