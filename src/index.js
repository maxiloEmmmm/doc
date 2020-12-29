import maxiloVue from 'maxilo-vue';
import App from './App';
import './route';
import './config';
import './store';
import './validate';
import './utils';
import './component';

maxiloVue.targetComponent = App;
maxiloVue.run();