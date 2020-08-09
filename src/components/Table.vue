<template>
  <div class="tableContainer">
    <table class="table">
      <caption class="table__caption">
        <slot></slot>
      </caption>
      <thead class="table__head">
        <tr class="table__row">
          <th class="">Price</th>
          <th class="">Ammount</th>
          <th class="table__row--hidden ">Total</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr
            v-for="(item, index) in items"
            class="table__row"
            :key="'t' + index"
        >
          <td class="">{{item[0]}}</td>
          <td class="">{{ item[1] }}</td>
          <td class="table__row--hidden">{{ item[0] * item[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['items']
}
</script>