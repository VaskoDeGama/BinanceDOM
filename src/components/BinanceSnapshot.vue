<template>
  <section class="binance-snapshot">
    <h2 class="binance-snapshot__symbol-type">Symbol type: {{ symbol }}</h2>
    <div v-if="!snapshot.bids"  class="binance-snapshot__wrapper">
      <PreLoader />
    </div>
    <div v-else class="binance-snapshot__wrapper">
        <Table :items="snapshot.asks">Ask</Table>
        <Table :items="snapshot.bids">Bid</Table>
    </div>

  </section>
</template>

<script>
import Table from './Table'
import PreLoader from './PreLoader'

export default {
  name: 'BinanceSnapshot',
  components: {Table, PreLoader},
  data: () => ({
    symbol: 'BTCUSDT',
    snapshot: {
      bids: null,
      asks: null
    }
  }),
  comments: {Table},
  methods: {
    async getSnapshot() {
      try {
        const response = await this.$get(this.symbol)
        console.log(response)
        const {asks, bids} = response.data
        this.snapshot.asks = asks
        this.snapshot.bids = bids
      } catch (e) {
        console.log(e)
      }

    }
  },
  watch: {
    symbol: async function() {
      await this.getSnapshot()
    }
  },
  mounted: async function () {
    await this.getSnapshot()
    this.$bus.$on('changeSymbol', ({symbol}) => {
      this.symbol = symbol
    })

  },
}
</script>