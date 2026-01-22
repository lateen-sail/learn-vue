<template>
  <div class="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">ユーザー一覧</h2>

    <!-- ローディング状態 -->
    <div v-if="loading" class="text-center py-8">
      <div
        class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"
      ></div>
      <p class="mt-2 text-stone-600">データを読み込み中...</p>
    </div>

    <!-- エラー状態 -->
    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-700 font-semibold">{{ error }}</p>
      <button
        @click="fetchUsers"
        class="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        再読み込み
      </button>
    </div>

    <!-- ユーザーデータ表示 -->
    <div v-else-if="users.length > 0">
      <div class="mb-4 flex justify-between items-center">
        <p class="text-stone-600">
          {{ users.length }}人のユーザーが見つかりました
        </p>
        <button
          @click="fetchUsers"
          class="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          更新
        </button>
      </div>

      <div class="grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="user in users"
          :key="user.id"
          class="border border-stone-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <h3 class="text-lg font-semibold text-stone-800 mb-2">
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
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// リアクティブなデータ
const users = ref([]);
const loading = ref(false);
const error = ref(null);

// ユーザーデータを取得する関数
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

// コンポーネントがマウントされたときにデータを取得
onMounted(() => {
  fetchUsers();
});
</script>
