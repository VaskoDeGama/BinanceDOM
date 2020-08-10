<template>
  <section class="diff-list">
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
    <div class="diff-list__event-log">
      <h3 class="diff-list__title">Even Diff log:</h3>
      <div class="diff-list__log-container">
        <ul v-if="logs.length > 0" class="diff-list__event-container">
          <li
              v-for="(log, index) in logs"
              :key="'log-' + index"
          >
            <p>Time Stamp: <span>{{log.date}}</span> Symbol: <span>{{log.symbol}}</span></p>
            <p> Ask: PRICE diff: <span>{{log.ask.avgPrice}}</span> </p>
            <p> Bid: PRICE diff: <span>{{log.bid.avgPrice}}</span> </p>
          </li>
        </ul>
        <span v-else>There are no logs yet</span>
      </div>
    </div>

  </section>
</template>

<script>
import {timeToFormat, getAvg} from '../utils/'

export default {
  name: 'DiffList',
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT",
    logs: []
  }),
  mounted() {
    this.$bus.$on('diff', (data) => {
      const {asksAdd, bidsAdd, type, symbol} = data
      const ask = getAvg(asksAdd)
      const bid = getAvg(bidsAdd)
      const log = {
        symbol,
        ask: {...ask},
        bid: {...bid},
        type: type,
        date: timeToFormat(Date.now())

      }
      this.logs.push(log)
    })
  },
  watch: {
    currentSymbol(symbol) {
      this.$bus.$emit('changeSymbol', {symbol, type: 'changeSymbol'})
    }
  }
}
</script>