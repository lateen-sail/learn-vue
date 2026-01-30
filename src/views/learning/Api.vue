<template>
  <div class="max-w-4xl mx-auto">
    <!-- ローディング状態 -->
    <p v-if="loading">データを読み込み中...</p>

    <!-- エラー状態 -->
    <div v-else-if="error" class="flex flex-col gap-4 py-8">
      <p class="text-red-700 font-bold">{{ error }}</p>
      <Button class="mt-4" variant="default" @click="fetchUsers">
        再読み込み
      </Button>
    </div>

    <!-- ユーザーデータ表示 -->
    <div v-else-if="hasUsers">
      <div class="grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="user in users"
          :key="user.id"
          class="border border-stone-200 rounded-lg p-4"
        >
          <h3 class="text-lg font-bold">
            {{ user.name }}
          </h3>
          <p class="text-stone-600 mb-1">
            <span class="font-medium">Email:</span> {{ user.email }}
          </p>
          <p class="text-stone-500 text-sm">
            <span class="font-medium">ID:</span> {{ user.id }}
          </p>
        </div>
      </div>
    </div>

    <p v-else-if="isEmpty">表示できるユーザーがいません</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Button } from "@/components/ui/button";

const users = ref([]);
const loading = ref(false);
const error = ref(null);

const hasUsers = computed(() => users.value.length > 0);
const isEmpty = computed(
  () => !loading.value && !error.value && users.value.length === 0,
);

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

// 通信処理
const getUsers = async () => {
  const response = await fetch(USERS_URL);

  if (!response.ok) throw new Error(`HTTPエラー: ${response.status}`);
  return response.json();
};

// 状態管理
const fetchUsers = async () => {
  loading.value = true;
  error.value = null;

  try {
    users.value = await getUsers();
  } catch (err) {
    error.value =
      err instanceof Error
        ? `データの取得に失敗しました: ${err.message}`
        : "データの取得に失敗しました";
    console.error("ユーザーデータの取得エラー:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchUsers();
});
</script>
