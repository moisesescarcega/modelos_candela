<script>
    import { T } from '@threlte/core';
    import { OrbitControls } from '@threlte/extras';
    import { ePlantaVisible } from '../State';
	import Bolsa from './bolsa_mexicana_de_valores.svelte';
    export let pavisible = false;
    export let azvisible = false;


    ePlantaVisible.subscribe( () => {
        switch ($ePlantaVisible) {
            case 'estado 1' : {
                console.log('estado por default');
                pavisible = false;
                azvisible = false;
                break;
            }
            case 'estado 2' : {
                console.log('estado 2');
                pavisible = true;
                azvisible = false;
                break;
            }
            case 'estado 3' : {
                console.log('estado 3');
                pavisible = true;
                azvisible = true;
                break;
            }
        }
    } );

</script>

<T.PerspectiveCamera makeDefault position={[3,3,-3]} >
    <OrbitControls enablePan />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.4} />
<T.DirectionalLight position={[0,7,1]} intensity={0.8} castShadow shadow.mapSize.width={1024} shadow.mapSize.height={1024} color={[0.8,0.6,0.6]} >
</T.DirectionalLight>

<Bolsa scale={0.1} position={[0,0,0]} visible={true} />
