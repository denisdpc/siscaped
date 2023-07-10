<script lang="ts">
    import { FileDropzone } from '@skeletonlabs/skeleton';
    import { arqFotos, fotos } from '$lib/shared/stores'

    let files: FileList;

    async function upload() {
        console.log("upload");
        const arquivos = await files;

        $arqFotos = arquivos;

        for (let i=0; i<arquivos.length; i++) {
            let file = arquivos[i];
            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function() {                     
                let img = document.getElementById("image-preview");
                img.src = reader.result;
                console.log(img.naturalWidth+":"+img.naturalHeight);
                $fotos.push(img);
                //alert('next')
            }    
        }

        // let file = arquivos[0];

        // let reader = new FileReader();

        // reader.readAsDataURL(file);
        // reader.onload = function() {
        //     let img = document.getElementById("image-preview");
        //     img.src = reader.result;
        //     console.log(img.naturalWidth);
        // }

    }
</script>

<FileDropzone name="files" accept=".jpg" multiple="true" on:change={upload} bind:files={files}>	
	<svelte:fragment slot="message">Localizar arquivos de foto</svelte:fragment>
	<svelte:fragment slot="meta">JPG</svelte:fragment>
</FileDropzone>

<br>
<br>
<img id="image-preview">
