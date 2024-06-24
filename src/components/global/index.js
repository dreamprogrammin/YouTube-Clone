import TheHeader from '@/components/global/TheHeader.vue';
import TheSidebar from '@/components/global/TheSidebar.vue';
import TheCategory from '@/components/global/TheCategory.vue';
import TheMainVideo from '@/components/global/TheMainVideo.vue';
import TheSidebarCompact from '@/components/global/TheSidebarCompact.vue';
import TheSidebarMobile from '@/components/global/TheSidebarMobile.vue';

const components = [
  { name: 'TheHeader', component: TheHeader },
  { name: 'TheSidebar', component: TheSidebar },
  { name: 'TheCategory', component: TheCategory },
  { name: 'TheMainVideo', component: TheMainVideo },
  { name: 'TheSidebarCompact', component: TheSidebarCompact },
  { name: 'TheSidebarMobile', component: TheSidebarMobile }
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  }
};
