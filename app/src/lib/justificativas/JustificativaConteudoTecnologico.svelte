<script>
    import { justificativaConteudoTecnologico } from "$lib/shared/stores";
</script>

<h3>
    <textarea bind:value={ $justificativaConteudoTecnologico } 
              class="textarea" 
              rows="4" 
              placeholder="Justificativa (domínio e ciclo tecnológico)" />
</h3>

