<script>
    import { empresa, produto, analista, organizacaoMilitar } from '$lib/shared/stores';
</script>

<h3>
    <input class="input" 
           type="text" 
           placeholder="Empresa" 
           bind:value = { $empresa }/>
    <br><br>
    <input class="input" 
           type="text" 
           placeholder="Produto" 
           bind:value = { $produto }/>
    <br><br>
    <input class="input" 
            type="text" 
            placeholder="Organização Militar" 
            bind:value = { $organizacaoMilitar }/>
    <br><br>
    <input class="input" 
           type="text" 
           placeholder="Analista" 
           bind:value = { $analista }/>
</h3>