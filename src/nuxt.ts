import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'
import VitePluginComponentsDocs from '.'

export default defineNuxtModule({
  meta: {
    name: 'vite-plugin-components-docs',
    configKey: 'vite-plugin-components-docs',
  },
  setup() {
    addVitePlugin(() => VitePluginComponentsDocs())
  },
}) as any
