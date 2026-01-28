<template>
  <div class="px-4 flex flex-col gap-8 items-center py-12">
    <h1 class="text-4xl font-bold text-stone-800 mb-8">カウンター</h1>

    <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <h2 class="text-2xl font-bold text-stone-800 mb-4 text-center">
        カウンター
      </h2>

      <!-- カウント表示 -->
      <div class="text-center mb-6">
        <span class="text-6xl font-bold text-sky-600">{{ count }}</span>
      </div>

      <!-- ボタン群 -->
      <div class="flex gap-2 pt-4">
        <button
          @click="increment"
          class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-2xl"
        >
          +
        </button>

        <button
          @click="decrement"
          class="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-2xl"
        >
          -
        </button>

        <button
          @click="reset"
          class="bg-stone-500 hover:bg-stone-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          reset
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);
</script>
