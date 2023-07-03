<script>
    import { empresa, produto, assessor, orgaoDirecaoSetorial, organizacaoMilitar, data } from '$lib/shared/stores';
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
       placeholder="Órgão de Direção Setorial (OSD)" 
       bind:value = { $orgaoDirecaoSetorial }/>
    <br><br>
    <input class="input" 
            type="text" 
            placeholder="Organização Militar (OM)" 
            bind:value = { $organizacaoMilitar }/>
    <br><br>
    <input class="input" 
           type="text" 
           placeholder="Assessor" 
           bind:value = { $assessor }/>
    <br><br>
    <input class="input" 
           type="text" 
           placeholder="Data" 
           bind:value = { $data }/>
</h3>