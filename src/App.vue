<script setup>
import Counter from "./components/Counter.vue";
import UserList from "./components/UserList.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <!-- ヘッダー -->
    <header class="text-center mb-8">
      <img
        alt="Vue logo"
        class="mx-auto mb-4"
        src="./assets/logo.svg"
        width="80"
        height="80"
      />
      <h1 class="text-4xl font-bold text-gray-800">Vue 3 アプリケーション</h1>
      <p class="text-gray-600 mt-2">カウンター機能とユーザーデータ表示</p>
    </header>

    <!-- メインコンテンツ -->
    <main class="container mx-auto px-4 max-w-6xl">
      <div class="space-y-8">
        <!-- カウンター機能 -->
        <section>
          <Counter />
        </section>

        <!-- ユーザーリスト -->
        <section>
          <UserList />
        </section>
      </div>
    </main>

    <!-- フッター -->
    <footer class="text-center mt-16 text-gray-500 text-sm">
      <p>Vue 3 + Tailwind CSS で作られたサンプルアプリケーション</p>
    </footer>
  </div>
</template>
