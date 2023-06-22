<script lang="ts">
    import { maturidadeTecnologica, 
             cicloTecnologico, 
             dominioTecnologico,
             conteudoTecnologico,
             disponibilidadeLogistica,
             disponibilidadeProdutiva,
             dificuldadeObtencao,
             necessidadeEstrategica,
             necessidadeTatica,
             imprescindibilidade,
             fomentoOperacional,
             categorizacao
            } from "$lib/shared/stores";

    let fileNameSalve = '';
    
    const jsonData = {
        maturidadeTecnologica: $maturidadeTecnologica,
        cicloTecnologico: $cicloTecnologico,
        dominioTecnologico: $dominioTecnologico,
        conteudoTecnologico: $conteudoTecnologico,
        disponibilidadeLogistica: $disponibilidadeLogistica,
        disponibilidadeProdutiva: $disponibilidadeProdutiva,
        dificuldadeObtencao: $dificuldadeObtencao,
        necessidadeEstrategica: $necessidadeEstrategica,
        necessidadeTatica: $necessidadeTatica,
        imprescindibilidade: $imprescindibilidade,
        fomentoOperacional: $fomentoOperacional,
        categorizacao: $categorizacao
    };

    function download() {
        const content = JSON.stringify(jsonData);
        const a = document.createElement("a");
        const file = new Blob([content], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = fileNameSalve.concat('.ped');
        a.click();
    }

</script>

<br><br>

<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
	<div class="input-group-shim">Armazenar</div>
	<input bind:value={fileNameSalve} 
           placeholder=" empresa - identificação do item" />
	<button class="variant-filled-secondary" on:click={download}>Salvar</button>
</div>
