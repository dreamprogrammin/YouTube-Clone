import TheHeader from '@/components/global/TheHeader.vue';
import TheSidebar from '@/components/global/TheSidebar.vue';
import TheCategory from '@/components/global/TheCategory.vue';
import TheMainVideo from '@/components/global/TheMainVideo.vue';
import TheMiniSidebar from '@/components/global/TheMiniSidebar.vue';
import TheBackground from '@/components/global/TheBackground.vue';

const components = [
  { name: 'TheHeader', component: TheHeader },
  { name: 'TheSidebar', component: TheSidebar },
  { name: 'TheCategory', component: TheCategory },
  { name: 'TheMainVideo', component: TheMainVideo },
  { name: 'TheMiniSidebar', component: TheMiniSidebar },
  { name: 'TheBackground', component: TheBackground }
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  }
};
