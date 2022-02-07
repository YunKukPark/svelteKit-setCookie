/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
interface IUser {
	session_id?: string;
	authenticated: boolean;
}
declare namespace App {
	interface Locals {
		user: IUser;
	}

	interface Platform {}

	interface Session {}

	interface Stuff {}
}
