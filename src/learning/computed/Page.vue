<template>
  <div class="flex items-center gap-3 w-full max-w-md">
    <Input v-model="count" type="number" class="w-20" />
    <span class="text-2xl shrink-0">× 2 =</span>
    <span class="text-amber-400 font-bold text-4xl shrink-0">{{
      doubleCount
    }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Input } from "@/components/ui/input";

const count = ref(0);

const doubleCount = computed(() => {
  return count.value * 2;
});
</script>
