import { createApp } from 'vue';
import mayka from './App';
import comp from './components/UI'

const app = createApp(mayka)
console.log(comp);
comp.forEach(elem => {
    app.component(elem.name, elem)
    
})

app.mount('#app');
