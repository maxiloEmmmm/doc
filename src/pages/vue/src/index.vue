<script>
export default {
    render() {
        return <div>
            <ysz-module-widget title='源码解析'>
                <tw-list-item1 index indexBorder items={[
                    {title: '不包含template ast及ssr相关'},
                    {title: '不包含平台相关, 仅以web为例, 无weex'},
                ]}></tw-list-item1>
            </ysz-module-widget>

            <ysz-module-widget title='快速开始'>
                <tw-list-item2 items={[
                    {title: '尝试从一个例子快速展开', desc: <pcode dir='tpl' src="vue/quickstart.js"></pcode>},
                ]}></tw-list-item2>
            </ysz-module-widget>
            <ysz-module-widget title='导入了vue 看看其中包含了什么'>
                <tw-list-item2 items={[
                    {title: <pcode dir='tpl' split='1' src="vue/quickstart.js"></pcode>},
                    {title: '挂载了一些全局方法, 看着花里胡哨 其实跟我们的例子没啥太大关系 可以先忽略', 
                        desc: "components, directives, filters, extend, config, util, set, delete, nextTick, observable, options, mixin, use"},
                    {title: '挂载了一些实例方法', desc: '_init, $data, $props, $set, $delete, $watch, $on, $once, $off, $emit, _update, $forceUpdate, $destroy, $nextTick, _render, 还有一些辅助属性'}
                ]}></tw-list-item2>
            </ysz-module-widget>
            <ysz-module-widget title='new Vue到底会干什么'>
                可以理解为生成一个数据结构用来描述我们的页面, 数据结构也可以理解为想法, 然后调用平台(web/weex)相关api, 相关api也可以理解成画笔, 最终绘制成我们看到的界面
            </ysz-module-widget>
            <ysz-module-widget title='那边先来看看如何一步步的生成了数据结构, 抛开option 我们直接看构造函数'>
                <tw-list-item2 items={[
                    {title: <pcode dir='vue' split='8-15' src="core/instance/index.js"></pcode>},
                    {title: '调用了导出后挂载在示例上的_init', desc: <tw-list-item2 items={[
                        {title: <pcode dir='vue' split='14' src="core/instance/index.js"></pcode>},
                        {title: '看看都发生了什么'},
                        {title: <pcode dir='vue' split='19' src="core/instance/init.js"></pcode>, desc: <ysz-card>
                            <span slot="header">_uid</span>
                            <tw-list-item1 index indexBorder items={[
                                {title: '用于Vue及拓展的实例唯一标记'}, {title: '用于performance mark'}, {title: '当key无定义时, 生成key'}, {title: '函数组件中辅助传递上下文'}
                            ]}></tw-list-item1>
                        </ysz-card>},
                        {title: <pcode dir='vue' split='30' src="core/instance/init.js"></pcode>, desc: <ysz-card>
                            <span slot="header">_isVue</span>
                            <tw-list-item1 index indexBorder items={[
                                {title: '用于Vue实例标记'}, {title: '防止Vue实例被观察'}, {title: 'debug信息收集'}, {title: '格式化组件名字时区分实例和Options'}
                            ]}></tw-list-item1>
                        </ysz-card>},
                    ]}></tw-list-item2>}
                ]}></tw-list-item2>
            </ysz-module-widget>
            {/*<pcode split='12-22' line='21' dir='vue' src="src/core/index.js"></pcode>*/}
        </div>
    }
}
</script>