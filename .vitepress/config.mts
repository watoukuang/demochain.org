import {defineConfig} from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

export default defineConfig({
    cleanUrls: true, 
    appearance:'dark',  
    title: "168CHAIN",
    base: '/', 
    description: "区块链在线演示平台",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        
        // SEO 相关的 Meta 标签
        ['meta', { name: 'description', content: '168CHAIN 提供全面的区块链学习资源，涵盖区块链聚合浏览器、链上工具、演示平台、教育网和链上套利等功能，助力开发者与用户掌握区块链技术' }],
        ['meta', { name: 'keywords', content: '区块链, 区块链聚合浏览器, 链上工具, 区块链演示平台, 区块链教育网, 链上套利, 比特币, 以太坊, Solana, 智能合约, 去中心化' }],
        
        // Open Graph（用于社交媒体分享）
        ['meta', { property: 'og:title', content: '168CHAIN' }],
        ['meta', { property: 'og:description', content: '168CHAIN 是一个区块链学习平台，提供区块链聚合浏览器、链上工具、演示平台、教育网及链上套利等一站式功能，帮助开发者掌握区块链技术，深入了解区块链世界。' }],
        ['meta', { property: 'og:image', content: '/logo.png' }],
        ['meta', { property: 'og:url', content: 'https://168chain.com' }],
        ['meta', { property: 'og:type', content: 'website' }],
        
        // Twitter Card 配置
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: '168CHAIN' }],
        ['meta', { name: 'twitter:description', content: '168CHAIN 提供区块链聚合浏览器、链上工具、演示平台、教育网和链上套利等功能，助力开发者掌握和应用区块链技术。' }],
        ['meta', { name: 'twitter:image', content: '/logo.png' }],
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
        nav,
        sidebar,
        socialLinks: [
            { icon: 'github', link: '' },
            { icon: 'twitter', link: '' },
            { icon: 'telegram', link: '' }
        ],
        footer: {
            copyright: 'Copyright © 2024-present 168chain.com'
        }
    },
    sitemap: {
        hostname: 'https://168chain.com',
    },
})
