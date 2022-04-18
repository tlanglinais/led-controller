import { v4 as uuidv4 } from 'uuid';

export const fetcher = async (url, method = 'GET', body = null) => {
  const headers: any = {};
  if (url.includes('todoist.com')) {
    headers.Authorization = `Bearer ${process.env.REACT_APP_TODOIST_API_KEY}`;
    if (body) {
      headers['X-Request-Id'] = uuidv4();
      headers['Content-Type'] = 'application/json';
    }
  }

  // console.log('url', url);
  // console.log('method', method);
  // console.log('headers', headers);
  // console.log('body', body);

  const response = await fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    ...(headers && { headers }),
    ...(body && { body: JSON.stringify(body) }),
  });
  return response;
};

export default fetcher;
