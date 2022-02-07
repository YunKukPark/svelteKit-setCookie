import * as cookie from 'cookie';

export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');

  event.locals.user = cookies;

  if (!cookies.session_id) {
    event.locals.user.authenticated = false;
  } else {
    event.locals.user.authenticated = true;
  }

  console.log(event.locals);
  const response = await resolve(event);
  return response;
};

export const getSession = async (event) => {
  const { user } = event.locals;

  if (!user.session_id) return;

  return { user };
};
