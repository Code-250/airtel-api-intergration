<template>
  <div class="app-container">
    <router-view :posts="posts" class="router"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    posts: [
      {
        transactionId: 1,
        sender: 723443217,
        receiver: 726453232,
        message: "Confirm you have received/ sent 20,000 RWF ",
        amount: 20000,
      },
      {
        transactionId: 2,
        sender: 723583311,
        receiver: 725453242,
        message: "Confirm you have received/ sent 20,400 RWF ",
        amount: 20400,
      },
      {
        transactionId: 3,
        sender: 726103217,
        receiver: 726450172,
        message: "Confirm you have received/ sent 90,000 RWF ",
        amount: 70000,
      },
      {
        transactionId: 4,
        sender: 722843247,
        receiver: 726456372,
        message: "Confirm you have received/ sent 120,000 RWF ",
        amount: 120000,
      },
      {
        transactionId: 5,
        sender: 722743210,
        receiver: 7274502342,
        message: "Confirm you have received/ sent 50,000 RWF ",
        amount: 50000,
      },
      {
        transactionId: 6,
        sender: 722743210,
        receiver: 7274502342,
        message: "Confirm you have received/ sent 50,000 RWF ",
        amount: 50000,
      },
      {
        transactionId: 7,
        sender: 726103217,
        receiver: 726450172,
        message: "Confirm you have received/ sent 90,000 RWF ",
        amount: 70000,
      },
      {
        transactionId: 8,
        sender: 723443217,
        receiver: 726453232,
        message: "Confirm you have received/ sent 20,000 RWF ",
        amount: 20000,
      },
    ],
  }),
};
</script>
<style>
.app-container {
  margin: 0px;
  padding: 0px;
}
.router {
  margin: 0px;
  padding: 0px;
}
</style>