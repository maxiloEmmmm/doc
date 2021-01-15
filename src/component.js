import maxiloVue from 'maxilo-vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
maxiloVue.vue.use(antd)

import avt from 'antd-vue-tool'
import 'antd-vue-tool/dist/index.css'
maxiloVue.vue.use(avt)

import 'vendor/prism.css'

import pcode from './components/pcode'
maxiloVue.vue.component(pcode.name, pcode)