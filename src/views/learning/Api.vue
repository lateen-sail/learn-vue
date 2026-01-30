<template>
  <div class="max-w-4xl mx-auto">
    <!-- ローディング状態 -->
    <p v-if="state.loading">データを読み込み中...</p>

    <!-- エラー状態 -->
    <div v-else-if="state.error" class="flex flex-col gap-4 py-8">
      <p class="text-red-700 font-bold">{{ state.error }}</p>
      <Button class="mt-4" variant="default" @click="fetchSchemaItem">
        再読み込み
      </Button>
    </div>

    <!-- schema 表示 -->
    <div v-else-if="hasLinks" class="grid grid-cols-3 gap-3">
      <div
        v-for="(link, index) in state.links"
        :key="index"
        class="border border-stone-200 rounded-lg p-4 flex flex-col gap-2"
      >
        <h3 class="text-lg font-bold">{{ link.title }}</h3>
        <p class="text-stone-400 text-xs">
          {{ link.description }}
        </p>
      </div>
    </div>

    <p v-else-if="isEmpty">表示できるデータがありません</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Button } from "@/components/ui/button";
import axios from "axios";

const state = ref({
  links: [],
  loading: false,
  error: null,
});

const hasLinks = computed(() => state.value.links.length > 0);
const isEmpty = computed(
  () =>
    !state.value.loading &&
    !state.value.error &&
    state.value.links.length === 0,
);

const SCHEMA_URL = "https://qiita.com/api/v2/schema?locale=ja";

// 通信処理
const getSchemaItem = async () => {
  const { data } = await axios.get(SCHEMA_URL);

  const links = data?.properties?.item?.links;

  if (!Array.isArray(links)) {
    throw new Error("links 定義が見つかりませんでした");
  }

  return links.map((link) => ({
    title: link.title ?? "(title なし)",
    description: link.description ?? "(description なし)",
  }));
};

// 状態管理
const fetchSchemaItem = async () => {
  state.value.loading = true;
  state.value.error = null;

  try {
    state.value.links = await getSchemaItem();
  } catch (err) {
    state.value.links = [];
    state.value.error =
      err instanceof Error
        ? `データの取得に失敗しました: ${err.message}`
        : "データの取得に失敗しました";
    console.error("schema 取得エラー:", err);
  } finally {
    state.value.loading = false;
  }
};

onMounted(() => {
  fetchSchemaItem();
});
</script>
