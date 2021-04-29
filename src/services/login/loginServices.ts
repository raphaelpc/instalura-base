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

async function doLogin({ username, password }: doLoginProps) {
  return HttpClient('https://instalura-api-git-master-omariosouto.vercel.app/api/login', {
    method: 'POST',
    body: {
      username,
      password,
    },
  });
}

export default {
  doLogin,
};
