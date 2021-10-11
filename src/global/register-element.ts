import { App } from 'vue'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { ElButton, ElInput } from 'element-plus'

// import 'element-plus/dist/index.css'
const components = [ElButton, ElInput]

export function registerElement(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
