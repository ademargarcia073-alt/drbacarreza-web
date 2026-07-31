<script lang="ts">
	import { whatsappHref, whatsappDefaultMessage } from '$lib/content';

	let {
		label,
		message = whatsappDefaultMessage,
		variant = 'primary'
	}: {
		label: string;
		message?: string;
		variant?: 'primary' | 'secondary';
	} = $props();
</script>

<a
	class="btn {variant === 'primary' ? 'btn-primary' : 'btn-secondary'}"
	href={whatsappHref(message)}
	target="_blank"
	rel="noopener"
>
	{label}
</a>
