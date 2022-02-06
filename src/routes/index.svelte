<script context="module">
	export const load = ({ session }) => {
		console.log(session);
		return {
			props: {
				session
			}
		};
	};
</script>

<script>
	export let session;
</script>

<h2>{JSON.stringify(session)}</h2>
