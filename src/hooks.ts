export const handle = async ({ event, resolve }) => {
	event.locals.userName = 'yunkukpark';
	const response = await resolve(event);
	return response;
};

export const getSession = (req) => {
	return {
		user: {
			id: 'yunkukPark',
			name: 'yunkukPark',
			access: 'admin'
		}
	};
};
