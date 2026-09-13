export interface NavLink {
	label: string;
	href: string;
}

export interface HeroBadge {
	text: string;
}

export interface Specialty {
	icon: string;
	title: string;
	description: string;
}

export interface TimelineItem {
	year: string;
	text: string;
}

export interface FaqItem {
	question: string;
	answer: string;
	pending?: boolean;
}

export interface Testimonial {
	quote: string;
	attribution: string;
	pending?: boolean;
	pendingNote?: string;
}

export interface SocialLink {
	label: string;
	href: string | null;
	pending?: boolean;
}

export interface ClinicalCase {
	slug: string;
	title: string;
	quote: string;
	quoteAttribution: string;
	context?: string;
	images: string[];
	/** Video embebido por iframe (ej. YouTube) — para reproductor HTML5 nativo, usar `videos`. */
	videoEmbedUrl?: string;
	videoTitle?: string;
	/** URLs de video (mp4) reproducidas con el <video> nativo — sin orden significativo. */
	videos?: string[];
	pending?: boolean;
	pendingNote?: string;
}

