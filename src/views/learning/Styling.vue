<template>
  <Button
    class="text-xl font-bold hover:bg-stone-400"
    :class="{
      'bg-amber-500 text-white': isActive,
      'bg-sky-500 text-black': !isActive,
    }"
    :style="{
      borderColor: isActive ? '#333333' : 'transparent',
      borderWidth: '2px',
      borderStyle: 'solid',
    }"
    @click="isActive = !isActive"
  >
    Change Color
  </Button>
</template>

<script setup>
import { ref } from "vue";
import { Button } from "@/components/ui/button";

const isActive = ref(false);
</script>
