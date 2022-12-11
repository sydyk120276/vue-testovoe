<template lang="">
  <div class="top-0 bottom-0 left-0 right-0 bg-black/50 fixed flex z-30" v-if="show === true" @click.stop="hideDialog">
    <div @click.stop class="m-auto bg-white rounded-[12px] min-w-[300px] min-h-[50px] p-[20px] ">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from '../../mixins/toggleMixin'
export default {
  name: 'my-dialog',
  mixins: [toggleMixin],
  mounted() {
    console.log('dialog mounted')
  }
}
</script>
<style lang="">

</style>