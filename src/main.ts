import { createApp } from 'vue'
import App from './App.vue'

// import "~/styles/element/index.scss";

import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import router from './router'
// import all element css, uncommented next line
import 'element-plus/dist/index.css'

// or use cdn, uncomment cdn link in `index.html`

import '~/styles/index.scss'
import 'uno.css'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faGear } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
