import LandingView from '@/views/LandingView.vue';
import ContactView from '@/views/ContactView.vue';
import PricingView from '@/views/PricingView.vue';
import ServicesView from '@/views/ServicesView.vue';
import AboutView from '@/views/AboutView.vue';
import TeamView from '@/views/TeamView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routerOptions = {
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/o-nama',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/pregledi',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/cjenovnik',
      name: 'pricing',
      component: PricingView,
    },
    {
      path: '/tim',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView,
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    }
  ],
};

export default routerOptions;
