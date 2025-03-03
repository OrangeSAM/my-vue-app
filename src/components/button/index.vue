<template>
  <button>{{ btnText }}</button>
</template>

<script setup lang="ts">
defineOptions({ name: "SamBtn" });

defineProps({
  btnText: {
    type: String,
    default: "确认",
  },
});
</script>

<style scoped></style>
