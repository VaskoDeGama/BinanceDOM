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
import {updateLevel} from '@/utils'

export default {
  name: 'BinanceSnapshot',
  components: {Table, PreLoader},
  data: () => ({
    symbol: 'BTCUSDT',
    snapshot: {
      bids: null,
      asks: null,
      lastUpdateId: null
    },
    socket: null
  }),
  comments: {Table},
  methods: {
    async getSnapshot() {
      try {
        const response = await this.$get(this.symbol, 100)
        const {bids, asks, lastUpdateId} = response.data
        this.snapshot.asks = asks.reverse()
        this.snapshot.bids = bids.reverse()
        this.snapshot.lastUpdateId = lastUpdateId

      } catch (e) {
        console.log(e)
      }
    },
    socketSubscribe() {
      this.socket = this.$subscribe(this.symbol)
      this.socket.onmessage = event => {

        const data = JSON.parse(event.data)
        if(this.snapshot.lastUpdateId <= data['u']) {
          const [asksAdd, bidsAdd] = [
            data.a.filter(item => item[1] != 0),
            data.b.filter(item => item[1] != 0)
          ]

          const newAsks = updateLevel(this.snapshot.asks, asksAdd.reverse())
          const newBids = updateLevel(this.snapshot.bids, bidsAdd.reverse())
          this.snapshot = {
            ...this.snapshot,
            asks: newAsks,
            bids: newBids,
            lastUpdateId: data['u']

          }

          const symbol = this.symbol
          this.$bus.$emit('diff', {type: 'diff', asksAdd, bidsAdd,symbol})
        }

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