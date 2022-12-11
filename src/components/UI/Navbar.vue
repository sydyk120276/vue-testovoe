<template lang="">
  <div class="h-[50px] bg-gray-300 drop-shadow-2xl flex items-center px-[15px] ">
    <div @click="$router.push('/')" >Vue 3</div>
    <div class="ml-auto ">
      <my-button @click="$router.push('/posts')" class="p-[8px]">Посты</my-button>
      <my-button @click="$router.push('/about')" class="ml-[20px] p-[8px] ">О сайте</my-button>
      <my-button @click="$router.push('/store')" class="ml-[20px] p-[8px] ">Store</my-button>
      <my-button @click="$router.push('/composition')" class="ml-[20px] p-[8px] ">CompositionApi</my-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style lang="">

</style>