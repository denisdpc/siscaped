<script lang="ts">
    import { FileDropzone } from '@skeletonlabs/skeleton';
    import { fotos } from '$lib/shared/stores'

    let files: FileList;
    

    async function upload() {
        // $fotos = [];
        const arquivos = await files;

        const box = document.getElementById('box');

        for (let i=0; i<arquivos.length; i++) {
            let file = arquivos[i];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            
            reader.onload = function() {   
                let img = document.createElement('img')
                img.setAttribute('id',file.name);
                img.src = reader.result;
                $fotos.push(img);                                
                //box.appendChild(img);
                $fotos = $fotos;
            }    
        }
    }

    function excluirFoto(idToRemove) {      
        const indexToRemove = $fotos.findIndex(object => object.id === idToRemove);        
        $fotos.splice(indexToRemove, 1);   
        $fotos = $fotos;     
    }
</script>

<FileDropzone name="files" accept=".jpg" multiple="true" on:change={upload} bind:files={files}>	
	<svelte:fragment slot="message">Localizar arquivos de foto</svelte:fragment>
	<svelte:fragment slot="meta">JPG</svelte:fragment>
</FileDropzone>


{#if $fotos.length>0}
<div class="table-container">
    <table class="table table-cell-fit">
        <thead>
            <tr>
                <th>Arquivo</th>
                <th>Excluir</th>
            </tr>
        </thead>
        <tbody>
            {#each $fotos as foto}
            <tr>
                <td>{ foto.id }</td>
                <td on:click={() => {excluirFoto(foto.id)}}>X</td>
            </tr>            
            {/each}
        </tbody>
    </table>
</div>
     
{/if}


<!-- <div id="box"></div> -->

<style>    
    td { text-align: center; }
</style>