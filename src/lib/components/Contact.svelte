<script lang="ts">
	import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';
	import WhatsAppButton from './shared/WhatsAppButton.svelte';

	let name = $state('');
	let phone = $state('');
	let reason = $state('');
	let preferredTime = $state('');
	let status: 'idle' | 'submitting' | 'success' | 'error' = $state('idle');
	let errors: Record<string, string> = $state({});

	function validate() {
		const next: Record<string, string> = {};
		if (!name.trim()) next.name = 'Ingresá tu nombre.';
		if (!phone.trim()) next.phone = 'Ingresá un teléfono de contacto.';
		if (!reason.trim()) next.reason = 'Contanos brevemente el motivo de tu consulta.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;

		status = 'submitting';
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					access_key: PUBLIC_WEB3FORMS_ACCESS_KEY,
					subject: 'Nueva solicitud de consulta — sitio Dr. Bacarreza',
					from_name: name,
					Nombre: name,
					Teléfono: phone,
					'Motivo de consulta': reason,
					'Horario preferido': preferredTime || 'No especificado'
				})
			});
			const result = await response.json();

			if (result.success) {
				status = 'success';
				name = '';
				phone = '';
				reason = '';
				preferredTime = '';
				errors = {};
			} else {
				status = 'error';
			}
		} catch {
			status = 'error';
		}
	}
</script>

<section id="contacto" class="contact">
	<div class="section-wrap contact-grid">
		<div class="contact-intro">
			<p class="kicker">Contacto</p>
			<h2 class="h2">Agenda tu consulta</h2>
			<p class="contact-text">
				Completa el formulario o escríbenos directamente por WhatsApp — te responderemos a la
				brevedad para coordinar tu cita.
			</p>
			<WhatsAppButton label="Escribir por WhatsApp" />
		</div>

		<form class="contact-form" onsubmit={handleSubmit} novalidate>
			{#if status === 'success'}
				<p class="form-success" role="status">
					Gracias, recibimos tu solicitud. Nos pondremos en contacto a la brevedad.
				</p>
			{:else if status === 'error'}
				<p class="form-error-banner" role="alert">
					No pudimos enviar tu solicitud. Probá de nuevo en un momento o escribinos directamente
					por WhatsApp.
				</p>
			{/if}

			<div class="field">
				<label for="contact-name">Nombre</label>
				<input
					id="contact-name"
					class="input"
					type="text"
					placeholder="Tu nombre completo"
					bind:value={name}
					aria-invalid={!!errors.name}
				/>
				{#if errors.name}<span class="field-error">{errors.name}</span>{/if}
			</div>

			<div class="field">
				<label for="contact-phone">Teléfono</label>
				<input
					id="contact-phone"
					class="input"
					type="tel"
					placeholder="Tu número de contacto"
					bind:value={phone}
					aria-invalid={!!errors.phone}
				/>
				{#if errors.phone}<span class="field-error">{errors.phone}</span>{/if}
			</div>

			<div class="field">
				<label for="contact-reason">Motivo de consulta</label>
				<input
					id="contact-reason"
					class="input"
					type="text"
					placeholder="Breve descripción de tu consulta"
					bind:value={reason}
					aria-invalid={!!errors.reason}
				/>
				{#if errors.reason}<span class="field-error">{errors.reason}</span>{/if}
			</div>

			<div class="field">
				<label for="contact-time">Horario preferido</label>
				<input
					id="contact-time"
					class="input"
					type="text"
					placeholder="Ej: tardes, lunes a viernes"
					bind:value={preferredTime}
				/>
			</div>

			<button type="submit" class="btn btn-secondary" disabled={status === 'submitting'}>
				{status === 'submitting' ? 'Enviando...' : 'Enviar solicitud'}
			</button>
		</form>
	</div>
</section>

<style>
	.contact {
		border-top: 2px solid var(--color-divider);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 64px;
	}

	.contact-text {
		font-size: 15px;
		line-height: 1.65;
		color: var(--color-neutral-700);
		margin: 0 0 28px;
		max-width: 440px;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.field label {
		font-size: 14px;
		font-weight: 400;
		color: var(--color-text);
	}

	.input {
		background: var(--color-surface);
		border: 2px solid var(--color-divider);
		color: var(--color-text);
		font-family: var(--font-body);
		font-size: 15px;
		padding: 12px 14px;
	}

	.input::placeholder {
		color: var(--color-neutral-700);
	}

	.input:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 2px;
	}

	.input[aria-invalid='true'] {
		border-color: var(--color-accent);
	}

	.field-error {
		font-size: 13px;
		color: var(--color-accent-700);
	}

	.form-success {
		font-size: 14px;
		font-weight: 600;
		color: var(--color-accent-700);
		border: 2px solid var(--color-accent-700);
		padding: 12px 14px;
		margin: 0;
	}

	.form-error-banner {
		font-size: 14px;
		font-weight: 600;
		color: var(--color-text);
		background: var(--color-accent-100);
		border: 2px solid var(--color-accent);
		padding: 12px 14px;
		margin: 0;
	}

	.contact-form button[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
