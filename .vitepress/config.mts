import {defineConfig} from 'vitepress'

export default defineConfig({
    cleanUrls: true, 
    appearance:'dark',  
    title: "RZCODE｜归零码",
    description: "归零码｜面试宝典｜JAVA面试宝典｜Golang中文网｜Java中文网",
    head: [
        ['link',
            {
                rel: 'icon',
                href: './logo.png'
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
                'vue'
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
                text: '📚 编程基础',
                items: [
                    {
                        text: '🧱 数据结构',
                        link: '/docs/R00-数据结构/0000-指引/00'
                    },
                    {
                        text: '🧮 常用算法',
                        link: '/docs/R01-常用算法/0000.md'
                    },
                    {
                        text: '🧠 设计模式',
                        link: '/docs/R02-设计模式/0000.md'
                    }
                ]
            },
            {
                text: '🏃‍♂️ JAVA编程',
                items: [
                    {
                        text: '💻 J2SE基础',
                        link: '/docs/R16-J2SE基础/1600.md'
                    },
                    {
                        text: '🐹 J2EE框架',
                        link: '/docs/R17-J2EE框架/1700.md'
                    },
                    {
                        text: '🐱 JVM笔记',
                        link: '/docs/R18-JVM笔记/1800.md'
                    }
                ]
            },
            {
                text: '🏃‍♂️ Golang编程',
                link: '/docs/R15-Golang编程/1500.md'
            },
            {
                text: '🛢️ MySQL笔记',
                link: '/docs/R03-MySQL笔记/0300.md'
            },
            {
                text: '📕 Redis笔记',
                link: '/docs/R04-Redis笔记/0400.md'
            },
            {
                text: '📬 消息队列',
                items: [
                    {
                        text: '📨 KFK笔记',
                        link: '/docs/R06-消息队列/0600-KFK笔记/060000.md'
                    },
                    {
                        text: '📤 RMQ笔记',
                        link: '/docs/R06-消息队列/0601-RMQ笔记/060100.md'
                    }
                ]
            },
            {
                text: '🧩 分布式',
                items: [
                    {
                        text: '🌀 服务网关',
                        link: '/docs/R12-分布式/1200-服务网关/120000.md'
                    },
                    {
                        text: '🧭 注册中心',
                        link: '/docs/R12-分布式/1201-注册中心/120100.md'
                    }
                ]
            },
            {
                text: '🛠️ 运维笔记',
                link: '/docs/R13-运维笔记/1301-NG相关/130100.md'
            },
            {
                text: '🧠 思考',
                link: '/docs/R09-编程思考/0901-服务限流.md'
            },
            {
                text: '✨ 优质服务',
                link: '/service.md'
            },
        ],        
        sidebar: {
            '/docs/R00-数据结构/': [
                {
                    text: '写在前面',
                    link: '/docs/R00-数据结构/0000-指引/00'
                }, {
                    text: '📃 线性表',
                    items: [
                        {
                            text: '数组',
                            link: '/docs/R00-数据结构算法/01'
                        },
                        {
                            text: '链表',
                            items: [
                                {
                                    text: '单向链表',
                                    link: '/docs/R00-数据结构/0002-链表/000201-单向链表.md'
                                },
                                {
                                    text: '双向链表',
                                    link: '/docs/R00-数据结构/0002-链表/000202-双向链表.md'
                                },
                                {
                                    text: '循环链表',
                                    link: '/docs/R00-数据结构/0002-链表/000203-循环链表.md'
                                },
                                {
                                    text: '双向循环链表',
                                    link: '/docs/R00-数据结构/0002-链表/000204-双向循环链表.md'
                                }
                            ]
                        },
                        {
                            text: '栈',
                            link: '/docs/R00-数据结构/0003-栈/000301-栈.md'
                        },
                        {
                            text: '队列',
                            items: [
                                {
                                    text: '普通队列',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '阻塞队列',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '并发队列',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '双端队列',
                                    link: '/docs/R00-数据结构算法/01'
                                }
                            ]
                        }
                    ]
                }, {
                    text: '💦 散列表',
                    items: [
                        {
                            text: '散列函数',
                            link: '/docs/算法/00'
                        },
                        {
                            text: '冲突解决',
                            link: '/docs/算法/01'
                        },
                        {
                            text: '位图',
                            link: '/docs/算法/01'
                        },
                        {
                            text: '动态扩容',
                            link: '/docs/算法/01'
                        }
                    ],
                }, {
                    text: '🌲树',
                    items: [
                        {
                            text: '二叉树',
                            items: [
                                {
                                    text: '二叉查找树',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '平衡二叉树',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '平衡二叉查找树',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '完全二叉树',
                                    link: '/docs/R00-数据结构算法/01'
                                }
                            ]
                        },
                        {
                            text: '多路查找树',
                            items: [
                                {
                                    text: 'B树',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: 'B+树',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '3-3树',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '2-3-4树',
                                    link: '/docs/R00-数据结构算法/01'
                                }
                            ]
                        },
                        {
                            text: '堆',
                            items: [
                                {
                                    text: '小顶堆',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '大顶堆',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '二顶堆',
                                    link: '/docs/R00-数据结构算法/01'
                                },
                                {
                                    text: '斐波那契堆',
                                    link: '/docs/R00-数据结构算法/01'
                                }
                            ]
                        }
                    ],
                }, {
                    text: '🐰图',
                    items: [
                        {
                            text: '存储',
                            link: '/docs/R00-数据结构算法/01'
                        },
                        {
                            text: '关键路径',
                            link: '/docs/R00-数据结构算法/01'
                        },
                        {
                            text: '最小生成树',
                            link: '/docs/R00-数据结构算法/01'
                        },
                        {
                            text: '最短路径',
                            link: '/docs/R00-数据结构算法/01'
                        },
                        {
                            text: '拓扑排序',
                            link: '/docs/R00-数据结构算法/01'
                        }
                    ]
                }
            ],
            '/docs/R09-编程思考':[
                {
                    text: '服务限流',
                    link: '/docs/R09-编程思考/0901-服务限流.md'
                },
                {
                    text: '负载均衡',
                    link: '/docs/R09-编程思考/0902-负载均衡.md'
                }
            ],
            '/docs/R06-消息队列/0600-KFK笔记': [
                {
                    "text": "📚 基础知识",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060000.md"
                },
                {
                    "text": "📊 消费模型",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060001.md"
                },
                {
                    "text": "🔍 参数详解",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060002.md"
                },
                {
                    "text": "⚠️ 消息丢失",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060003.md"
                },
                {
                    "text": "🔄 消息重复",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060004.md"
                },
                {
                    "text": "🔒 副本机制",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060005.md"
                },
                {
                    "text": "👥 消费组",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060006.md"
                },
                {
                    "text": "⏳ 消息滞后",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060007.md"
                },
                {
                    "text": "✅ 确认机制",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060008.md"
                },
                {
                    "text": "❓ 常见问题",
                    "link": "/docs/R06-消息队列/0600-KFK笔记/060009.md"
                }
            ],
            '/docs/R04-Redis笔记':[
                {
                    text: '基础结构',
                    link: '/docs/R04-Redis笔记/0000.md'
                },
            ],
        },
        footer: {
            copyright: 'Copyright © 2024-present rzcode.com'
        }
    },
    sitemap: {
        hostname: 'https://rzcode.com',
    },
})
