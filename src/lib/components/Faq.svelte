<script lang="ts">
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import { faqs } from '$lib/content';
	import PendingBadge from './shared/PendingBadge.svelte';

	let openFaq = $state(0);

	function toggle(i: number) {
		openFaq = openFaq === i ? -1 : i;
	}
</script>

<section id="faq" class="faq">
	<div class="section-wrap faq-wrap">
		<p class="kicker">Preguntas frecuentes</p>
		<h2 class="h2">Resolvemos tus dudas</h2>

		<div>
			{#each faqs as faq, i (faq.question)}
				<div class="faq-item">
					<button
						class="faq-question"
						onclick={() => toggle(i)}
						aria-expanded={openFaq === i}
					>
						<span>{faq.question}</span>
						<ChevronDown
							size={20}
							color="var(--color-accent-700)"
							strokeWidth={2}
							style={`flex-shrink:0; transition: transform .2s; transform: rotate(${openFaq === i ? 180 : 0}deg);`}
						/>
					</button>
					{#if openFaq === i}
						<div class="faq-answer">
							<p>{faq.answer}</p>
							{#if faq.pending}
								<PendingBadge />
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq {
		border-top: 2px solid var(--color-divider);
		background: var(--color-neutral-100);
	}

	.faq-wrap {
		max-width: 840px;
	}

	.faq-item {
		border-bottom: 2px solid var(--color-divider);
	}

	.faq-question {
		all: unset;
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		width: 100%;
		padding: 22px 0;
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 17px;
		color: var(--color-text);
	}

	.faq-answer {
		padding: 0 0 24px;
	}

	.faq-answer p {
		margin: 0 0 8px;
		font-size: 15px;
		line-height: 1.65;
		color: var(--color-neutral-700);
	}
</style>
