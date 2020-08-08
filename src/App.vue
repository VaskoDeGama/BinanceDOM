<template>
  <div id="container">
    <navBar
        :navTabs="navTabs"
        v-on:switchTab="tab => (this.navTabs.currentTab = tab)"
    >
    </navBar>

  <keep-alive>
    <component v-bind:is="currentComponent" ></component>
  </keep-alive>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  data: () => ({
    navTabs: {
      currentTab: 'DiffList',
      tabs: [
          {component: 'BinanceSnapshot', tabName: 'Binance Snapshot'},
          {component: 'DiffList', tabName: 'Diff List'},
      ],
    }
  }),
  computed: {
    currentComponent() {
      return this.navTabs.currentTab
    }
  },
  components: {
    NavBar,
    BinanceSnapshot: () => import('./components/BinanceSnapshot.vue'),
    DiffList: () => import('./components/DiffList.vue'),

  }
}
</script>

