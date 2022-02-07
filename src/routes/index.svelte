<script context="module">
  export const load = ({ session }) => {
    return { props: { session } };
  };
</script>

<script>
  export let session;
</script>

<h2>{JSON.stringify(session)}</h2>
