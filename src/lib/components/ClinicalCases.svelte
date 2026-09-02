<script lang="ts">
	import { casesKicker, casesHeading, casesIntro, clinicalCases } from '$lib/content';
	import ClinicalCaseCard from './shared/ClinicalCaseCard.svelte';
</script>

<section id="intervenciones" class="cases">
	<div class="section-wrap">
		<p class="kicker">{casesKicker}</p>
		<h2 class="h2">{casesHeading}</h2>
		<p class="cases-intro">{casesIntro}</p>

		<div class="cases-list">
			{#each clinicalCases as caseItem (caseItem.slug)}
				<ClinicalCaseCard {caseItem} />
			{/each}
		</div>
	</div>
</section>

<style>
	.cases {
		border-top: 2px solid var(--color-divider);
		background: var(--color-neutral-100);
	}

	.cases-intro {
		font-size: 16px;
		line-height: 1.65;
		color: var(--color-neutral-700);
		max-width: 640px;
		margin: 0 0 32px;
	}

	.cases-list {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
</style>
