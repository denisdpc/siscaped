<script>
    import { justificativaConteudoTecnologico, maturidadeTecnologica } from "$lib/shared/stores";
</script>

<h3>
    <textarea bind:value={ $justificativaConteudoTecnologico } 
              class="textarea" 
              rows="4" 
              placeholder="Justificativa (domínio e ciclo tecnológico)" />
</h3>

<table class="tg">
{#if $maturidadeTecnologica > 3}    
    <thead>
        <tr>
            <th class="tg-0pky1" rowspan="3">domínio tecnológico</th>
            <th class="tg-0pky">avançado</th>
            <th class="tg-0pky">1</th>
            <th class="tg-0pky">3</th>
            <th class="tg-0pky">3</th>        
            </tr>
            <tr>
            <th class="tg-0pky">intermediário</th>
            <th class="tg-0pky">0</th>
            <th class="tg-0pky">2</th>
            <th class="tg-0pky">2</th>
            </tr>
            <tr>
            <th class="tg-0pky">básico</th>
            <th class="tg-0pky">0</th>
            <th class="tg-0pky">0</th>
            <th class="tg-0pky">1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="tg-0pky1" colspan="2" rowspan="2">bem / serviço / obra / informação</td>
            <td class="tg-0pky">domínio público</td>
            <td class="tg-0pky">contemporâneo</td>
            <td class="tg-0pky">inovador</td>
        </tr>
        <tr>
            <td class="tg-0pky1" colspan="3">ciclo tecnológico</td>        
        </tr>
    </tbody>    
{:else }    
    <thead>
        <tr>
        <th class="tg-0pky1" rowspan="3">domínio tecnológico</th>
        <th class="tg-0pky">avançado</th>
        <th class="tg-0pky">2</th>
        <th class="tg-0pky">3</th>
        <th class="tg-0pky">3</th>        
        </tr>
        <tr>
        <th class="tg-0pky">intermediário</th>
        <th class="tg-0pky">1</th>
        <th class="tg-0pky">2</th>
        <th class="tg-0pky">2</th>
        </tr>
        <tr>
        <th class="tg-0pky">básico</th>
        <th class="tg-0pky">0</th>
        <th class="tg-0pky">0</th>
        <th class="tg-0pky">1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td class="tg-0pky1" colspan="2" rowspan="2">projeto</td>
        <td class="tg-0pky">incremental</td>
        <td class="tg-0pky">conceitual</td>
        <td class="tg-0pky">radical</td>
        </tr>
        <tr>
        <td class="tg-0pky1" colspan="3">ciclo tecnológico</td>
        </tr>
    </tbody>    
{/if}
</table>