<template>
  <section class="diff-list">
    <div class="diff-list__event-log">
      <h3 class="diff-list__title">Even bus log.....</h3>
      <ul class="diff-list__event-container">
        <li>Even bus log..... 1</li>
        <li>Even bus log..... 2</li>
        <li>Even bus log..... 3</li>
        <li>Even bus log..... 4</li>
        <li>Even bus log..... 5</li>
        <li>Even bus log..... 6</li>
        <li>Even bus log..... 7</li>
        <li>Even bus log..... 8</li>
      </ul>
    </div>
    <div class="diff-list__select-symbol">
      <h3 class="diff-list__title" >Current symbol: BTCUSDT </h3>
      <label for="symbolSelect"></label>
      <select id="symbolSelect" class="diff-list__select">
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
export default {
  name: 'DiffList',
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT"
  }),
}
</script>