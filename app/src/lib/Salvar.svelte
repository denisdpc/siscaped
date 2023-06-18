<script>
    import { download } from '$lib/shared/util.js';
</script>

<textarea id="text-val" rows="4">This is the content of my file</textarea><br/>
<input type="button" id="dwn-btn" value="Download dinamically generated text file"/>

<button on:click={download('teste.txt','teste de imagem')}>Teste</button>