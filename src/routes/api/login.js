import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';

export const post = async ({ request }) => {
	const body = await request.json();
	const user = body;

	if (!(user.username === 'Yunkuk' && user.password === '!@#$@^#$')) {
		return { body: { message: 'NOT AUTH USER' } };
	}

	const sessionId = uuidv4();

	const setCookie = cookie.serialize('session_id', sessionId, {
		httpOnly: true,
		sameSite: 'lax',
		maxAge: 60 * 60 * 24 * 7,
		path: '/'
	});

	const headers = {
		'set-cookie': setCookie
	};

	return {
		status: 200,
		headers,
		body: {
			message: 'SUCCESS'
		}
	};
};
