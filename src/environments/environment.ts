import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'JakubPartTime',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44325',
    redirectUri: baseUrl,
    clientId: 'JakubPartTime_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone JakubPartTime',
  },
  apis: {
    default: {
      url: 'https://localhost:44325',
      rootNamespace: 'Cdv.JakubPartTime',
    },
  },
} as Environment;
