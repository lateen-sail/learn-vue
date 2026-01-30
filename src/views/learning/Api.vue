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
    <div v-else-if="users.length > 0">
      <div class="grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="user in users"
          :key="user.id"
          class="border border-stone-200 rounded-lg p-4 hover:shadow-md transition-shadow"
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

    <p v-else>表示できるユーザーがいません</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";

const users = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchUsers = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    const data = await response.json();
    users.value = data;
  } catch (err) {
    error.value = `データの取得に失敗しました: ${err.message}`;
    console.error("ユーザーデータの取得エラー:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchUsers();
});
</script>
