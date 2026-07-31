<script lang="ts">
	let { text = 'Pendiente de confirmar' }: { text?: string } = $props();
</script>

<span class="pending-badge">{text}</span>

<style>
	.pending-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: var(--color-accent-700);
		border: 1.5px solid var(--color-accent-700);
		padding: 3px 8px;
	}
</style>
