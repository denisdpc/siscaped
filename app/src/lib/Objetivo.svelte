<script>
    import { objetivo } from "$lib/shared/stores";

    //$objetivo = 'Este parecer técnico tem por finalidade assessorar o EMAER (4SC3) no processo de classificação de produtos (bem, informação, obra, serviço e/ou projeto) como Produto de Defesa (PRODE) ou Produto Estratégico de Defesa (PED), especificando sua utilização na Defesa Nacional de acordo com as métricas previstas na Portaria Normativa nº 86/GM-MD, de 13 de dezembro de 2018.';
</script>

<h3>
    <textarea bind:value={ $objetivo } 
              class="textarea" 
              rows="4" 
              placeholder="Objetivo" />
</h3>