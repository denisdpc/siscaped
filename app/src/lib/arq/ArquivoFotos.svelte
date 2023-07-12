<script lang="ts">
    import { FileDropzone } from '@skeletonlabs/skeleton';
    import { fotos } from '$lib/shared/stores'

    let files: FileList;

    async function upload() {
        $fotos = [];
        const arquivos = await files;

        const box = document.getElementById('box');

        for (let i=0; i<arquivos.length; i++) {
            let file = arquivos[i];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            
            reader.onload = function() {   
                let img = document.createElement('img')
                img.setAttribute('id',"image"+toString(i));                
                img.src = reader.result;
                $fotos.push(img);                
                box.appendChild(img);
            }    
        }        
        
    }
</script>

<FileDropzone name="files" accept=".jpg" multiple="true" on:change={upload} bind:files={files}>	
	<svelte:fragment slot="message">Localizar arquivos de foto</svelte:fragment>
	<svelte:fragment slot="meta">JPG</svelte:fragment>
</FileDropzone>


<div id="box"></div>
