<template>
  <div class="flex flex-col gap-6 w-full max-w-md">
    <!-- getter のみ -->
    <div class="flex items-center gap-3">
      <Input v-model="baseValueDouble" type="number" class="w-20" />
      <span class="text-2xl shrink-0">× 2 =</span>
      <span class="text-amber-400 font-bold text-4xl shrink-0">
        {{ doubleCount }}
      </span>
    </div>

    <!-- getter / setter -->
    <div class="flex items-center gap-3">
      <span class="shrink-0">黄金比</span>
      <Input v-model="baseValueGolden" type="number" class="w-20" />
      <span class="shrink-0">×</span>
      <Input v-model="doubleCountWithSetter" type="number" class="w-20" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Input } from "@/components/ui/input";

// Case 1
const baseValueDouble = ref(0);
const doubleCount = computed(() => {
  return baseValueDouble.value * 2;
});

// Case 2
const baseValueGolden = ref(0);
const GOLDEN_RATIO = 1.618;
const doubleCountWithSetter = computed({
  get() {
    return baseValueGolden.value * GOLDEN_RATIO;
  },
  set(value) {
    baseValueGolden.value = value / GOLDEN_RATIO;
  },
});
/*　学習メモ
■ 特徴
•	元データを加工した派生値
•	表示時と更新時で処理を分離できる
•	双方向だが「直接更新していない」

■ 向いている用途
	•	単位、比率変換
	•	フォーム用の表示専用値
	•	UI 都合の値変換
  
■ get / set を使ってよい条件例
	•	元となる state が存在する
	•	それを変換した値を UI に見せたい
	•	書き戻すときも逆変換が必要
	•	副作用はない
	•	ロジックが対称（get ↔ set）
*/
</script>
