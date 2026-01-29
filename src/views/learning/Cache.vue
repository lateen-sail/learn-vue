<template>
  <div class="flex flex-col gap-8">
    <p class="text-xs">コンソールも確認</p>
    <ul>
      <li>{{ computedNumber }}</li>
      <li>{{ computedNumber }}</li>
      <li>{{ computedNumber }}</li>
    </ul>
    <ul>
      <li>{{ methodNumber() }}</li>
      <li>{{ methodNumber() }}</li>
      <li>{{ methodNumber() }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";

// computed: 依存が変わらない限り、同じ描画サイクル内ではキャッシュされる
const computedNumber = computed(() => {
  console.log("computed 実行");
  return Math.random();
});

// method: テンプレートで評価されるたびに毎回実行される
const methodNumber = () => {
  console.log("method 実行");
  return Math.random();
};
</script>
