import { environment } from '@env/environment';
import { NbPasswordAuthStrategy } from '@nebular/auth';

export const strategyConfigs = NbPasswordAuthStrategy.setup({
  name: 'email',

  baseEndpoint: environment.apiUrl,

  login: {
    endpoint: '/auth/login',
    method: 'post',
  },

  register: {
    endpoint: '/auth/sign-up',
    method: 'post',
  },

  logout: {
    endpoint: '/auth/sign-out',
    method: 'post',
  },

  requestPass: {
    endpoint: '/auth/request-pass',
    method: 'post',
  },

  resetPass: {
    endpoint: '/auth/reset-pass',
    method: 'post',
  },

});
