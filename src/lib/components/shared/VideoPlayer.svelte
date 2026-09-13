<script lang="ts">
	let { src, title }: { src: string; title: string } = $props();
</script>

<!--
	Reproductor de video HTML5 nativo, sin librería externa. `preload="metadata"` hace que los
	navegadores (Chrome, Firefox, Safari) muestren el primer fotograma como portada antes de
	reproducir, sin necesidad de generar/subir una imagen de portada aparte.
-->
<video controls playsinline preload="metadata" aria-label={title}>
	<source {src} type="video/mp4" />
	Tu navegador no soporta la reproducción de este video.
</video>

<style>
	video {
		width: 100%;
		height: 100%;
		display: block;
		background: #000;
		object-fit: cover;
	}
</style>
