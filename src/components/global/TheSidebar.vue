<script setup>
import SidebarNavItem from '@/components/global/SidebarNavItem.vue';
import BasicIcon from '@/components/global/BasicIcon.vue';
import DropdownSettingsListItem from '@/components/global/DropdownSettingsListItem.vue';
import ButtonLogin from '@/components/global/ButtonLogin.vue';
</script>

<template>
  <aside class="fixed z-20 hidden max-h-screen w-64 overflow-auto bg-white pt-12 xl:block">
    <section class="border-b py-2">
      <ul>
        <sidebar-nav-item label="Home" name="home" is-active />
        <sidebar-nav-item label="Trending" name="fire" />
        <sidebar-nav-item label="Subscribe" name="collection" />
      </ul>
    </section>
    <section class="border-b py-2">
      <ul>
        <sidebar-nav-item name="library" label="Library" />
        <sidebar-nav-item name="clock" label="Subscripting" />
      </ul>
    </section>
    <section class="border-b px-8 py-4">
      <span class="text-sm font-medium leading-5"
        >Sign in to like videos comment, and subscribe</span
      >
      <button-login
        class="mt-3 flex items-center rounded-sm border border-blue-700 px-2 py-0.5 text-sm uppercase text-blue-700"
      />
    </section>
    <section class="border-b py-2">
      <div class="mr-6 px-6 py-2 text-sm font-bold uppercase">Best of youtube</div>
      <ul>
        <sidebar-nav-item name="music" label="Music" />
        <sidebar-nav-item name="sport" label="Sports" />
        <sidebar-nav-item name="gaming" label="Gaming" />
        <sidebar-nav-item name="movie" label="Movies" />
        <sidebar-nav-item name="news" label="News" />
        <sidebar-nav-item name="live" label="Live" />
        <sidebar-nav-item name="eye" label="360&deg; Video" />
      </ul>
    </section>
    <section class="border-b py-2">
      <ul>
        <sidebar-nav-item name="plusCircle" label="Browse chanel" />
      </ul>
    </section>
    <section class="border-b py-2">
      <div class="mr-6 px-6 py-2 text-sm font-bold uppercase">More from youtube</div>
      <ul>
        <sidebar-nav-item name="play" label="Youtube Premium" />
        <sidebar-nav-item name="live" label="Live" />
      </ul>
    </section>
    <section class="border-b py-2">
      <ul>
        <sidebar-nav-item name="setting" label="Setting" />
        <sidebar-nav-item name="flag" label="Repost History" />
        <sidebar-nav-item name="question" label="Help" />
        <sidebar-nav-item name="chat" label="Send feedback" />
      </ul>
    </section>
    <section class="space-y-4 px-6 py-4 text-xs font-semibold">
      <div>
        <a class="mr-2" href="#">About</a>
        <a class="mr-2" href="#">Press</a>
        <a class="mr-2" href="#">Copyright</a>
        <a class="mr-2" href="#">Contact us</a>
        <a class="mr-2" href="#">Creators</a>
        <a class="mr-2" href="#">Advertise </a>
        <a class="mr-2" href="#">Developers </a>
      </div>
      <div>
        <a class="mr-2" href="#">Terms</a>
        <a class="mr-2" href="#">Privacy</a>
        <a class="mr-2" href="#">Policy & Safety</a>
        <a class="mr-2" href="#">How YouTube works</a>
        <a class="mr-2" href="#">Test new features</a>
      </div>
      <div class="font-normal text-gray-500">&copy; Google LLC 2024</div>
    </section>
  </aside>
</template>

<style scoped></style>
