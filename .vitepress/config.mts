import {defineConfig} from 'vitepress'

export default defineConfig({
    cleanUrls: true, 
    appearance:'dark',  
    title: "168CHAIN",
    base: '/', 
    description: "区块链学习网站",
    head: [
        ['link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ]
    ],
    vite: {
        server: {
            port: 5177,
            headers: {
                'Content-Type': 'application/javascript'
            }
        },
        build: {
            rollupOptions: {
                output: {
                    format: 'esm',
                    chunkFileNames: 'assets/[name]-[hash].js',
                    assetFileNames: 'assets/[name]-[hash][extname]'
                },
            },
        },
        optimizeDeps: {
            include: [
                'ant-design-vue',
                '@ant-design/icons-vue',
                '@ant-design/icons-svg'
            ],
            exclude: ['@vue/server-renderer']
        },
        ssr: {
            noExternal: [
                /^ant-design-vue/,
                /^@ant-design/,
                /^lodash-es/,
                'dayjs',
                'vue',
                'scroll-into-view-if-needed'

            ]
        }

    },
    markdown: {
        image: {
          // 开启图片懒加载
          lazyLoading: true
        },
        config: (md) => {
            md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                let htmlResult = slf.renderToken(tokens, idx, options);
                if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
                return htmlResult;
            }
          }
      },
    themeConfig: {
        logo: './logo.png',
        darkModeSwitchLabel: '深浅模式',
        sidebarMenuLabel:'目录', 
        returnToTopLabel:'返回顶部', 
        docFooter: { 
            prev: '上一页', 
            next: '下一页', 
        }, 
        outline: {
            level: [2, 3],
            label: '本页导航'
        },
        nav: [
            {
                text: '🏠 首页',
                link: '/'
            },
            {
                text: '🟠 BTC',
                link: '/docs/R00-BTC/0000.md'
            },
            {
                text: '🔷 ETH',
                link: '/docs/R01-ETH/0100.md'
            },
            {
                text: '🟡 SOL',
                link: '/docs/R02-SOL/0200.md'
            },
            {
                text: '🧪 演示平台',
                items: [
                    {
                        text: '🔢 哈希',
                        link: 'hash'
                    },
                    {
                        text: '🧊 区块',
                        link: 'block'
                    },
                    {
                        text: '⛓️ 区块链',
                        link: 'blockchain'
                    },
                    {
                        text: '🌐 分布式',
                        link: 'distribution'
                    },
                    {
                        text: '🪙 代币',
                        link: 'token'
                    },
                    {
                        text: '💱 币基',
                        link: 'coinbase'
                    }
                ]
            }
        ],    
        sidebar: {},
        footer: {
            copyright: 'Copyright © 2024-present 168chain.com'
        }
    },
    sitemap: {
        hostname: 'https://168chain.com',
    },
})
