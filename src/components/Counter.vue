<template>
  <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
    <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
      カウンター
    </h2>

    <!-- カウント表示 -->
    <div class="text-center mb-6">
      <span class="text-6xl font-bold text-blue-600">{{ count }}</span>
    </div>

    <!-- ボタン群 -->
    <div class="flex flex-col gap-3">
      <button
        @click="increment"
        class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        カウントアップ (+1)
      </button>

      <button
        @click="decrement"
        class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        カウントダウン (-1)
      </button>

      <button
        @click="reset"
        class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        リセット (0)
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// カウントの状態を管理
const count = ref(0);

// カウントアップ
const increment = () => {
  count.value++;
};

// カウントダウン
const decrement = () => {
  count.value--;
};

// リセット
const reset = () => {
  count.value = 0;
};
</script>
