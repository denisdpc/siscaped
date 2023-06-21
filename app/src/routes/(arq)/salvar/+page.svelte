<script>    
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

    let fileName = '';

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
        a.download = fileName;
        a.click();
    }



// Start file download.
//download("hello.txt","This is the content of my file :)");

</script>

<br>
<input class="input" bind:value={fileName} placeholder="identificação do item" />
				

<br><br>
<button type="button" class="btn variant-filled" on:click={download}>salvar</button>