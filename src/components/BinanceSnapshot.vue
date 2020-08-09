<template>
  <section class="binance-snapshot">
    <h2 class="binance-snapshot__symbol-type">Symbol type: {{ symbol }}</h2>
    <div v-if="!snapshot.bids"  class="binance-snapshot__wrapper">
      <PreLoader />
    </div>
    <div v-else class="binance-snapshot__wrapper">
        <Table :items="snapshot.bids">Bid</Table>
        <Table :items="snapshot.asks">Ask</Table>
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
    },
    socket: null
  }),
  comments: {Table},
  methods: {
    async getSnapshot() {
      try {
        const response = await this.$get(this.symbol)
        const {asks, bids} = response.data
        this.snapshot.asks = asks.reverse()
        this.snapshot.bids = bids.reverse()
      } catch (e) {
        console.log(e)
      }
    },
    socketSubscribe() {
      this.socket = this.$subscribe(this.symbol)
      this.socket.onmessage = event => {
        const data = JSON.parse(event.data)

        const [asksAdd, bidsAdd] = [
            data.a.filter(item => item[1] != 0),
            data.b.filter(item => item[1] != 0)
        ]
        if(this.snapshot.asks || this.snapshot.bids ) {
          this.snapshot.asks.splice(this.snapshot.asks.length - asksAdd.length, asksAdd.length)
          this.snapshot.bids.splice(this.snapshot.bids.length - bidsAdd.length, bidsAdd.length)
          this.snapshot.asks = [...this.snapshot.asks, ...asksAdd].reverse()
          this.snapshot.bids = [...this.snapshot.bids, ...bidsAdd].reverse()
        }

        this.$bus.$emit('diff', {type: 'diff', asksAdd, bidsAdd})
      }

    }

  },
  mounted: async function () {
    await this.getSnapshot()
    this.socketSubscribe()

    this.$bus.$on('changeSymbol', ({symbol}) => {
      this.snapshot = {
        asks: null,
        bids: null
      }
      this.symbol = symbol
      this.getSnapshot()
      this.socket.close()
      this.socketSubscribe()
    })

  },
}
</script>