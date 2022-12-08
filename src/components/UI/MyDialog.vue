<template lang="">
  <div class="top-0 bottom-0 left-0 right-0 bg-black/50 fixed flex z-30" v-if="show === true" @click.stop="hideDialog">
    <div @click.stop class="m-auto bg-white rounded-[12px] min-w-[300px] min-h-[50px] p-[20px] ">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>
<style lang="">

</style>