import maxiloVue from 'maxilo-vue';
let router = maxiloVue.make("router").getRoute()
router.add('/', () => import('./pages/index'));
router.group('/', () => import('./pages/index'), (r) => {
    r.add('/vue/src', () => import('./pages/vue/src/index'));
    r.add('/pkg/antd-vue-tool', () => import('./pages/pkg/antd-vue-tool/index'));
})