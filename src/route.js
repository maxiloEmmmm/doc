import maxiloVue from 'maxilo-vue';
let router = maxiloVue.make("router").getRoute()
router.add('/', () => import('./pages/index'));