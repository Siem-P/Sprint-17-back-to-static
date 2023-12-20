<script>
  import Input from "$lib/atoms/input.svelte";
  import InputRequired from "$lib/atoms/input-required.svelte";
  import Taxtarea from "$lib/atoms/textarea.svelte";

  export let FormID, Method, Action
</script>

<form id="{FormID}" method="{Method}" action="{Action}">
  <InputRequired
    InputType="text"
    InputID="AddPlayer"
    LableFor="AddPlayer"
    LableText="* Add player ..."
  />
  <section>
    <Input
      InputType="Date"
      InputID="BirthDate"
      LableFor="BirthDate"
      LableText="Date of birth..."
    />
    <InputRequired
      InputType="text"
      InputID="JerseyNumber"
      LableFor="JerseyNumber"
      LableText="* Jersey number..."
    />
  </section>
  <Input
    InputType="text"
    InputID="BirthCountry"
    LableFor="BirthCountry"
    LableText="* Country of birth..."
  />
  <Input
    InputType="text"
    InputID="ResidencePlace"
    LableFor="ResidencePlace"
    LableText="Place of residence..."
  />

  <Taxtarea InputID="Bio" LableFor="Bio" LableText="Bio..." />
</form>

<style>
  form {
    grid-area: form;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0.5rem 2rem 0.5rem 5px;
    padding-top: 1.5rem;
  }

  section {
    display: flex;
    gap: 2rem;
  }
</style>
