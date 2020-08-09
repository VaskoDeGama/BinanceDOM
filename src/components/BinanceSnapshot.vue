<template>
  <section class="binance-snapshot">
    <h2 class="binance-snapshot__symbol-type">Symbol type: {{ symbol }}</h2>
    <div class="binance-snapshot__wrapper">

    <Table :items="snapshot.asks">Ask</Table>
    <Table :items="snapshot.bids">Bid</Table>



    </div>

  </section>
</template>

<script>
import Table from './Table'

export default {
  name: 'BinanceSnapshot',
  components: {Table},
  data: () => ({
    symbol: 'BTCUSDT',
    snapshot: {
      bids: null,
      asks: null
    }
  }),
  comments: {Table},
  methods: {

  },
  created: async function () {
    const {data} = await this.$get(this.symbol)
    const {asks, bids} = data
    this.snapshot.asks = asks
    this.snapshot.bids = bids
  },
  mounted: function () {
    this.$bus.$on('changeSymbol', ({symbol}) => {
      this.symbol = symbol
    })

  }
}
</script>