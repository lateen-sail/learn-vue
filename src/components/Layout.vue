<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// メニューの状態管理
const isMenuOpen = ref(false);

// メニューの開閉
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// メニューを閉じる
const closeMenu = () => {
  isMenuOpen.value = false;
};

const route = useRoute();

const pageTitle = computed(() => {
  return route.meta.title ?? "タイトルが入ります";
});
</script>

<template>
  <div class="min-h-screen bg-stone-50 text-stone-900">
    <!-- ヘッダー -->
    <header class="h-16 px-4 flex items-center justify-between bg-white">
      <h1 class="text-3xl font-bold">Vue Sandbox</h1>
      <!-- メニューアイコン -->
      <button
        @click="toggleMenu"
        class="p-2 hover:bg-stone-100 rounded-md transition-colors"
        aria-label="メニューを開く"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </header>

    <!-- スライドインメニュー -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-50">
      <!-- オーバーレイ背景 -->
      <div
        @click="closeMenu"
        class="absolute inset-0 bg-gray-900/40 transition-all"
      ></div>

      <!-- メニューパネル -->
      <div
        class="absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform ease-in-out duration-300"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
        @click="closeMenu"
      >
        <!-- メニューコンテンツ -->
        <nav class="px-6 py-6 flex flex-col gap-4">
          <ul class="pt-2 ml-4">
            <li>
              <router-link
                to="/"
                class="block py-2 px-3 hover:bg-stone-50 rounded-md transition-colors"
              >
                ホーム
              </router-link>
            </li>
          </ul>
          <div>
            <span class="text-xs text-stone-400 mb-2">学習中</span>
            <ul class="pt-2 ml-4">
              <li>
                <router-link
                  to="/api"
                  class="block py-2 px-3 hover:bg-stone-50 rounded-md transition-colors"
                >
                  API
                </router-link>
              </li>
              <li>
                <router-link
                  to="/counter"
                  class="block py-2 px-3 hover:bg-stone-50 rounded-md transition-colors"
                >
                  カウンター
                </router-link>
              </li>
              <li>
                <router-link
                  to="/computed"
                  class="block py-2 px-3 hover:bg-stone-50 rounded-md transition-colors"
                >
                  算出プロパティ
                </router-link>
              </li>
              <li>
                <router-link
                  to="/method"
                  class="block py-2 px-3 hover:bg-stone-50 rounded-md transition-colors"
                >
                  メソッド
                </router-link>
              </li>
              <li>
                <router-link
                  to="/cache"
                  class="block py-2 px-3 hover:bg-stone-50 rounded-md transition-colors"
                >
                  キャッシュ
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <!-- メインコンテンツ -->
    <main class="min-h-[calc(100vh-4rem-3rem)]">
      <h1
        class="text-3xl bg-stone-100 text-stone-500 font-bold py-6 text-center tracking-wider"
      >
        {{ pageTitle }}
      </h1>
      <div class="px-4 flex flex-col gap-8 items-center py-12">
        <router-view />
      </div>
    </main>

    <!-- フッター -->
    <footer class="bg-stone-600 text-stone-50 text-center py-4">
      <p class="text-xs">Vue Sandbox</p>
    </footer>
  </div>
</template>
