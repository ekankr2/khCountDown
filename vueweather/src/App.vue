<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search...">
      </div>
    </main>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      api_key: '6d523938fc6d2de1fe87a72c783a4d33'
    }
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat',sans-serif;
}

#app{
  background-image: url("assets/cold-bg.jpg");
}
</style>
