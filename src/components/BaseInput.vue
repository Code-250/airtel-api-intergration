<!-- eslint-disable no-unused-vars -->
<template>
  <div class="input-wrap">
    <v-text-field
      type="text"
      :value="modelValue"
      label="label"
      required
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="attrs"
      @blur="$v.name.$touch()"
    ></v-text-field>
  </div>
</template>
<script setup>
import defineProps from "vue";

defineProps({
  label: {
    type: [String, Boolean],
    default: "",
  },
  modelValue: { type: String, default: "" },
});
</script>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
}
input {
  padding: 8px 12px;
  font-size: 16px;
}
</style>
