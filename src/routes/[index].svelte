<script context="module">
  export const load = ({ url, params }) => {
    console.log('url: ', url);
    console.log(params.index);
    return {
      props: {
        param: params.index
      }
    };
  };
</script>

<script>
  export let param;
</script>

<h1>{param}</h1>
