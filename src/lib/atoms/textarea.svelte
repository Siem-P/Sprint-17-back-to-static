<script>
  export let TextareaID, LableFor, LableText;
</script>

<div class="input-container">
  <textarea id={TextareaID} autocomplete="off" placeholder="" />
  <label for={LableFor}>{LableText}</label>
</div>

<style>
  .input-container {
    position: relative;
    width: 100%;
  }

  label {
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    transition: 0.3s ease-in-out;
    cursor: text;
  }

  textarea:hover,
  textarea:focus {
    outline: 3px solid #a5a5a5;
  }

  div textarea {
    height: 100%;
    width: 100%;
    min-height: 10rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text-color);

    border: none;
    outline: 3px solid white;
    outline-offset: -3px;
    box-shadow: var(--box-shadow);
    border-radius: 0.9rem;
    resize: vertical;
    transition: 0.3s ease-in-out;
  }

  div textarea::-webkit-resizer {
    display: none;
  }

  div textarea:focus ~ label,
  div textarea:not(:placeholder-shown) ~ label {
    top: -1.3rem;
    font-size: 12px;
  }
</style>
