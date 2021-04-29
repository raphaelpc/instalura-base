import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

interface doLoginProps {
  username: string;
  password: string;
}

async function HttpClient(
  url: string,
  { body, headers, ...options } : {
    body: { [propName: string]: any; };
    headers?: HeadersInit;
    [propName: string]: any;
  },
) {
  const response = await fetch(url, {
    body: JSON.stringify(body),
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (response.ok) return response.json();

  throw new Error('Falha em pegar os dados do servidor :(');
}

const BASE_URL = isStagingEnv
  // Backend de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Backend de PROD
  : 'https://instalura-api-omariosouto.vercel.app';

async function doLogin({ username, password }: doLoginProps) {
  const response: {
    data: {
      token: string;
      user: {
        id: string;
        name: string;
        username: string;
      };
    };
  } = await HttpClient(`${BASE_URL}/api/login`, {
    method: 'POST',
    body: {
      username,
      password,
    },
  });

  const { token } = response.data;
  setCookie(null, 'APP_TOKEN', token, {
    path: '/', // a partir da raiz, qualquer página terá acesso a este cookie
    masAge: 60 * 60 * 24 * 7, // 1 semana em segundos
  });

  return response.data;
}

function doLogout() {
  destroyCookie(null, 'APP_TOKEN');
}

export default {
  doLogin,
  doLogout,
};
