<template lang="">
  <input :value="modelValue" @input="updateInput" class="w-full h-[50px] pl-[10px] border-2 rounded-[4px]" type="text" />
</template>
<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
<style lang="">

</style>