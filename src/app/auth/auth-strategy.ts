import { environment } from '@env/environment';
import { NbAuthJWTToken, NbPasswordAuthStrategy } from '@nebular/auth';

export const strategyConfigs = NbPasswordAuthStrategy.setup({
  name: 'email',

  baseEndpoint: environment.apiUrl,

  token: {
    class: NbAuthJWTToken,
    key: 'token',
  },

  login: {
    endpoint: '/auth/login',
    method: 'post',
  },

  register: {
    endpoint: '/auth/register',
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
