import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import routes from './router/routes'

// HTTP connection to the API
const httpLinnk = createHttpLink({
  uri: "http://localhost:8000/graphql"
})

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLinnk,
  cache
})

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

loadFonts()

const pinia = createPinia().use(piniaPluginPersistedstate)
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app
  .use(vuetify)
  .use(routes)
  .use(apolloProvider)
  .use(pinia)
  .mount('#app')
