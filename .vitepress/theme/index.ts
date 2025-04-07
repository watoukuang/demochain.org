import Theme from 'vitepress/theme'
import './style/var.css'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/reset.css";
import * as antIcons from '@ant-design/icons-vue'


export default {
    ...Theme,
    themeConfig: {
        codeTheme: 'one-dark-pro',
        outline: {
            level: [2, 3], // 显示h2和h3标题
            label: '本页目录' // 自定义标题
        }
    },
    enhanceApp({app}) {
        // 注册 Ant Design Vue
        app.use(Antd)

        // 注册图标组件
        for (const [key, component] of Object.entries(antIcons)) {
            app.component(key, component)
        }
    }
}