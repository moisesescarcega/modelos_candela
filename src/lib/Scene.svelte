<script>
    import { T, useFrame } from '@threlte/core';
    import { OrbitControls } from '@threlte/extras';
    import { ePlantaVisible } from '../State';
	import Bolsa from './bolsa_mexicana_de_valores.svelte';
	// import { CircleGeometry, Color, MeshStandardMaterial } from 'three';
    export let pavisible = false;
    export let azvisible = false;

    let rotation = 0;
    useFrame((state, delta) => {
        rotation += delta * 0.03
    });

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
<T.DirectionalLight position={[2,5,1]} intensity={0.8} castShadow shadow.mapSize.width={1024} shadow.mapSize.height={1024} color={[0.8,0.6,0.6]} >
</T.DirectionalLight>

<Bolsa scale={0.1} position={[0,0,0]} visible={true} rotation.y={rotation} />

<T.Mesh rotation.x={-Math.PI/2} receiveShadow>
    <T.CircleGeometry args={[2, 80]}/>
    <T.MeshStandardMaterial color='honeydew' />
</T.Mesh>
