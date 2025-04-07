import {defineConfig} from 'vitepress'

export default defineConfig({
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
        },
        optimizeDeps: {
            include: ['ant-design-vue', '@ant-design/icons-vue']
        }
    },
    themeConfig: {
        logo: './logo.png',
        darkModeSwitchLabel: 'auto',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '🔥编程基础',
                items: [
                    {
                        text: '数据结构',
                        link: '/docs/R00-数据结构/0000-指引/00'
                    },
                    {
                        text: '常用算法',
                        link: '/docs/R00-数据结构算法/00'
                    },
                    {
                        text: '设计模式',
                        link: '/docs/R00-数据结构算法/00'
                    }
                ]
            },
            {
                text: 'J2SE梳理',
                items: [
                    {
                        text: '并发编程',
                        link: '/docs/R00-数据结构算法/00'
                    },
                    {
                        text: 'JVM调优',
                        link: '/docs/R00-数据结构算法/00'
                    },
                    {
                        text: '网络编程',
                        link: '/docs/R00-数据结构算法/00'
                    }
                ]
            },
            {
                text: 'MySQL笔记',
                link: '/docs/R01-网络编程/00'
            },
            {
                text: 'Redis笔记',
                link: '/docs/R01-网络编程/00'
            },
            {
                text: '消息队列',
                items: [
                    {
                        text: 'KFK笔记',
                        link: '/docs/R00-数据结构算法/00'
                    },
                    {
                        text: 'RMQ笔记',
                        link: '/docs/R00-数据结构算法/00'
                    }
                ]
            },
            {
                text: 'J2EE梳理',
                link: '/docs/R01-网络编程/00'
            },
            {
                text: '分布式',
                items: [
                    {
                        text: '网关',
                        link: '/docs/R00-数据结构算法/00'
                    }
                ]
            },
            {
                text: '💰区块链',
                link: '/docs/R01-网络编程/00'
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
            ]
        },
        footer: {
            copyright: 'Copyright © 2024-present rzcode.com'
        }
    }
})
