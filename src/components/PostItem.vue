<template lang="">
    <div class="p-[15px] border-2 border-teal-500 mt-[15px] flex items-center justify-between" >
      <div>
        <div class="">Название: {{ post.title }}</div>
        <div class="">Описание: {{ post.body }}</div>
      </div>
      <div>
        <my-button @click="$emit('remove', post)">Удалить</my-button>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style lang="">

</style>