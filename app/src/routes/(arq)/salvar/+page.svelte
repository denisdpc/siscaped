<script>    
    function salvar(filename, text) {
        console.log(filename, text)
    }
    function teste(nome) {
        console.log(nome)
    }
</script>

Salvar
<br>
<input class="input" title="Input (text)" type="text" placeholder="nome do arquivo" />
					

<button type="button" class="btn variant-filled" on:click={salvar('teste','texto enorme2')}>Salvar</button>

<br><br>
<button type="button" class="btn variant-filled" on:click={() => teste('teste')}>add</button>