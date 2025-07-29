<script>
    import NavBar from '$lib/app/navBar/index.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<NavBar
    logo={{
        image: '',
        path: '/'
    }}
    links={[
        {
            name: 'toto',
            path: '/'
        }
    ]}
/>

{@render children()}
