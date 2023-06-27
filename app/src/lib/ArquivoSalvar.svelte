<script lang="ts">
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

    
    const modal: ModalSettings = {
        type: 'alert',
        // Data
        title: 'Example Alert',
        body: 'This is an example modal.',
        image: 'https://i.imgur.com/WOgTG96.gif',
    };
    modalStore.trigger(modal);

</script>

<Modal />