<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <router-view></router-view>
      </div>
    </nav>
    <section class="main-section section"></section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <div class="red">footer section</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .red {
    color: red
  }
</style>
