<script setup>
import Counter from "./components/Counter.vue";
import UserList from "./components/UserList.vue";
</script>

<template>
  <div class="min-h-screen bg-stone-50 text-stone-900 pt-8">
    <!-- ヘッダー -->
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold">Vue Sandbox</h1>
    </header>

    <!-- メインコンテンツ -->
    <main class="px-4 flex flex-col gap-8 items-center py-12">
      <!-- カウンター機能 -->
      <section>
        <Counter />
      </section>

      <!-- ユーザーリスト -->
      <section>
        <UserList />
      </section>
    </main>

    <!-- フッター -->
    <footer class="bg-stone-600 text-stone-50 text-center py-4">
      <p class="text-xs">Vue Sandbox</p>
    </footer>
  </div>
</template>
