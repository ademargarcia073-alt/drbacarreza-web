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
