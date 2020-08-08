<template>
  <header class="header">
    <nav class="navbar" >
      <h1  class="navbar__title"><a href="#">Depth of Market</a></h1>
        <div class="navbar__links" role="navigation" id="navigation">

          <a v-for="{component, tabName} in navTabs.tabs"
             :key="component"
             :class="['navbar__link', {'navbar__link--active' : navTabs.currentTab === component}]"
             :href="'#'+component"
             @click="switchTab(component)"
          >
            {{tabName}}
          </a>
        </div>
      <button data-collapse data-target="#navigation" class="navbar__toggle">
        <span class="navbar__icon"></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    navTabs: Object
  },
  name: 'navBar',
  methods: {
    switchTab(tab) {
      this.$emit('switchTab', tab)
    }
  }

}
</script>

