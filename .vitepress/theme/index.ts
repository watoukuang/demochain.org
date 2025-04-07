import DefaultTheme from 'vitepress/theme'
import {defineAsyncComponent, h} from 'vue'
import 'ant-design-vue/dist/reset.css' // 引入样式

// 客户端专用组件加载器
const createClientComponent = (componentName) =>
    defineAsyncComponent({
        loader: () => import('ant-design-vue').then(m => m[componentName]),
        loadingComponent: () => null, // SSR 时返回空
        delay: 200
    })

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        // 注册你使用的所有组件
        const antdComponents = {
            'AButton': 'Button',
            'AInput': 'Input',
            'ASelect': 'Select',
            'ASelectOption': 'SelectOption',
            'ATooltip': 'Tooltip',
            'SearchOutlined': 'SearchOutlined',
            'QqOutlined': 'QqOutlined',
            'WechatOutlined': 'WechatOutlined',
        }

        Object.entries(antdComponents).forEach(([name, component]) => {
            app.component(name, createClientComponent(component))
        })
    }
}