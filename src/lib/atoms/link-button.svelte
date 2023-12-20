<script>
  export let Routing, LinkText;
</script>

<a href={Routing}>{LinkText}</a>

<style>
  a {
    grid-area: button;
    height: fit-content;
    width: fit-content;
    padding: 0.5rem 1.2rem;
    border-radius: 50rem;
    background-color: #63c6a7;
    color: white;
    border: none;
    font-size: 1rem;
    box-shadow: var(--box-shadow);
    text-decoration: none;
  }

  a:hover {
    background-color: #118f67;
  }
</style>
