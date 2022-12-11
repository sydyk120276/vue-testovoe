<template>
    <form
    action=""
    class="flex flex-col gap-[20px] pb-[40px]"
    @submit.prevent
    >
      <h4 class="text-red-500 font-bold">Создание поста</h4>
      <my-input
      v-focus
        v-model="post.title"
        type="text"
        placeholder="Название"
      />
      <my-input
        v-model="post.body"
        type="text"
        placeholder="Описание"
      />
      <my-button
        class="self-end"
        type="button"
        @click="createPost"
      >
        Создать
      </my-button>
    </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>
<style lang="">

</style>