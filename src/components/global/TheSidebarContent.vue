<script setup>
import SidebarNavItem from '@/components/global/SidebarNavItem.vue';
import TheFooter from '@/components/global/TheFooter.vue';
import SidebarSectionHeading from '@/components/global/SidebarSectionHeading.vue';
import SidebarSection from '@/components/global/SidebarSection.vue';
import ButtonLogin from '@/components/global/ButtonLogin.vue';
</script>

<template>
  <sidebar-section>
    <ul>
      <sidebar-nav-item label="Home" name="home" is-active />
      <sidebar-nav-item label="Trending" name="fire" />
      <sidebar-nav-item label="Subscribe" name="collection" />
    </ul>
  </sidebar-section>
  <sidebar-section>
    <ul>
      <sidebar-nav-item name="library" label="Library" />
      <sidebar-nav-item name="clock" label="Subscripting" />
    </ul>
  </sidebar-section>
  <sidebar-section class="border-b px-8 py-4">
    <span class="text-sm font-medium leading-5">Sign in to like videos comment, and subscribe</span>
    <button-login
      class="mt-3 flex items-center rounded-sm border border-blue-700 px-2 py-0.5 text-sm uppercase text-blue-700"
    />
  </sidebar-section>
  <sidebar-section>
    <sidebar-section-heading title="Best of youtube" />
    <ul>
      <sidebar-nav-item name="music" label="Music" />
      <sidebar-nav-item name="sport" label="Sports" />
      <sidebar-nav-item name="gaming" label="Gaming" />
      <sidebar-nav-item name="movie" label="Movies" />
      <sidebar-nav-item name="news" label="News" />
      <sidebar-nav-item name="live" label="Live" />
      <sidebar-nav-item name="eye" label="360&deg; Video" />
    </ul>
  </sidebar-section>
  <sidebar-section>
    <ul>
      <sidebar-nav-item name="plusCircle" label="Browse chanel" />
    </ul>
  </sidebar-section>
  <sidebar-section>
    <sidebar-section-heading title="More from youtube" />
    <ul>
      <sidebar-nav-item name="play" label="Youtube Premium" />
      <sidebar-nav-item name="live" label="Live" />
    </ul>
  </sidebar-section>
  <sidebar-section>
    <ul>
      <sidebar-nav-item name="setting" label="Setting" />
      <sidebar-nav-item name="flag" label="Repost History" />
      <sidebar-nav-item name="question" label="Help" />
      <sidebar-nav-item name="chat" label="Send feedback" />
    </ul>
  </sidebar-section>
  <sidebar-section class="space-y-4 px-6 py-4 text-xs font-semibold">
    <the-footer />
  </sidebar-section>
</template>

<style scoped></style>
