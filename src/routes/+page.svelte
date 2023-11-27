<script>
    import Scene from '$lib/Scene.svelte'
    import { Canvas } from '@threlte/core'
    import '../app.css'
    import { ePlantaVisible } from '../State'

    $: innerWidth = 0
	$: innerHeight = 0

    let textoBoton1 = 'Planta Alta'
    let textoBoton2 = 'Planta Azotea'
    let bazdisabled = true
    const PA = () => {
        switch ($ePlantaVisible) {
            case 'estado 1' : {
                $ePlantaVisible = 'estado 2';
                textoBoton1 = 'Planta Baja';
                textoBoton2 = 'Planta Azotea';
                bazdisabled = false;
                break;
            }
            case 'estado 2' : {
                $ePlantaVisible = 'estado 1';
                textoBoton1 = 'Planta Alta';
                textoBoton2 = 'Planta Azotea';
                bazdisabled = true;
                break;
            }
            case 'estado 3' : {
                $ePlantaVisible = 'estado 1';
                textoBoton1 = 'Planta Alta';
                textoBoton2 = 'Planta Azotea';
                bazdisabled = true;
                break;
            }
        }
    }
    const AZ = () => {
        switch ($ePlantaVisible) {
            case 'estado 2' : {
                $ePlantaVisible = 'estado 3';
                textoBoton1 = 'Planta Baja';
                textoBoton2 = 'Ocultar Azotea';
                bazdisabled = false;
                break;
            }
            case 'estado 3' : {
                $ePlantaVisible = 'estado 2';
                textoBoton1 = 'Planta Baja';
                textoBoton2 = 'Planta Azotea';
                bazdisabled = false;
                break;
            }
        }
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<svelte:head>
	<title>aresdi</title>
	<meta name="description" content="aresdi" />
</svelte:head>

<button class="botonP b1" on:click={PA}>{textoBoton1}</button>
<button class="botonP b2" on:click={AZ} disabled={bazdisabled}>{textoBoton2}</button>

<div class="cajaBotones">
    <a href="bolsa_mexicana_de_valores.glb" download class="botonDescarga">Descargar modelo GLTF</a>
    <a href="trazo_bolsa.blend" download class="botonDescarga">Descargar archivo Blender</a>
</div>

<Canvas size={{width: innerWidth - 16, height: innerHeight -17}}>
    <Scene />
</Canvas>

<style>
    .cajaBotones {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 150 px;
    }
    .botonDescarga {
        box-shadow:inset 0px 1px 0px 0px #ffffff;
        background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
        background-color:#ffffff;
        border-radius:6px;
        border:1px solid #dcdcdc;
        display:inline-flex;
        width: 150px;
        cursor:pointer;
        color:#666666;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:14px 22px;
        text-decoration:none;
    }
    .botonDescarga:hover {
        background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
        background-color:#f6f6f6;
    }
    .botonDescarga:active {
        position:relative;
        top:1px;
    }
    .botonP {
        display: none;
        border:solid 2px red;
        border-radius:25px;
        z-index:100; 
        position: fixed; 
        float: left; 
        width:120px; 
        height:45px; 
        cursor:pointer
    }
    .b1 {top:10px}
    .b2 {top:59px}
</style>