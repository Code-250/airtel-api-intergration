<template>
  <div class="app-container">
    <router-view class="router" :post="title"></router-view>
    <notifications group="auth" classes="vue-notification" />
  </div>
</template>

<script>
  export default{
    data: ()=>({
      title:"helle there"
    })
  }
</script>
<style lang="scss">
.app-container {
  margin: 0px;
  padding: 0px;
}
.router {
  margin: 0px;
  padding: 0px;
}
.vue-notification {
  padding: 20px;
  margin: 0 5px 5px;
  font-family: Raleway, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
</style>