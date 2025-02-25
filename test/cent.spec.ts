import { CentClient, CentMethods } from '../src';

describe('Centrifugo API Client', () => {
	const client = new CentClient({
		url: process.env.CENTRIFUGO_HOST,
		token: process.env.CENTRIFUGO_TOKEN
	});

	it('should return info', async () => {
		const { nodes } = await client.getInfo();

		expect(Array.isArray(nodes)).toBeTruthy();
	});
});
