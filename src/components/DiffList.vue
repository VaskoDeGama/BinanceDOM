<template>
  <section class="diff-list">
    <div class="diff-list__event-log">
      <h3 class="diff-list__title">Even bus log:</h3>
      <ul v-if="logs.length > 0" class="diff-list__event-container">
        <li
            v-for="(log, index) in logs"
            :key="'log-' + index"
        >{{log}}</li>
      </ul>
      <span v-else>There are no logs yet</span>
    </div>
    <div class="diff-list__select-symbol">
      <h3 class="diff-list__title" >Current symbol: {{currentSymbol}} </h3>
      <label for="symbolSelect"></label>
      <select id="symbolSelect" class="diff-list__select" v-model="currentSymbol">
        <option disabled="disabled" selected="selected">Choose a symbol</option>
        <option
            v-for="(item, index) in options"
            :key="index"
            class="select__option"
        >{{ item }}</option
        >
      </select>
    </div>
  </section>
</template>

<script>
const timeToFormat = (date) => {
  return new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }).format(date);
}

export default {
  name: 'DiffList',
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT",
    logs: []
  }),
  mounted() {
    this.$bus.$on('changeSymbol', ({type}) => {
      this.logs.push(`${timeToFormat(Date.now())}: Action Type: ${type}`)
    })

  },
  watch: {
    currentSymbol(symbol) {
      this.$bus.$emit('changeSymbol', {symbol, type: 'changeSymbol'})
    }
  }
}
</script>