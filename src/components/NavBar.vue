<template>
  <header class="header">
    <nav class="navbar" >
      <h1  class="navbar__title"><a href="#">Depth of Market</a></h1>
        <div class="navbar__links" role="navigation" id="navigation">
            <a href="/table" class="navbar__link">Binance Table</a>
            <a href="/dropdown" class="navbar__link">DropDown</a>
        </div>
      <button data-collapse data-target="#navigation" class="navbar__toggle">
        <span class="navbar__icon"></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navBar',
}
</script>

