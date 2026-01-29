<template>
  <div class="flex flex-col gap-8 w-full max-w-xl">
    <!-- default watch -->
    <section class="flex flex-col gap-2">
      <div class="flex items-center gap-3">
        <input
          v-model.number="defaultCount"
          type="number"
          class="border px-2 py-1 w-24"
        />
        <span>defaultCount: {{ defaultCount }}</span>
      </div>
      <p class="text-sm text-stone-500">lastLog: {{ defaultLastLog }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const defaultCount = ref(0);
const defaultLastLog = ref("まだ変化なし");

watch(defaultCount, (newValue, oldValue) => {
  defaultLastLog.value = `${oldValue} → ${newValue}`;
});

/* 学習メモ
■ 構文
  watch(監視対象, (新しい値, 古い値) => {
    副作用の処理
  })
*/
</script>
