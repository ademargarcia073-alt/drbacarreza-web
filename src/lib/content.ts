// Contenido del sitio del Dr. Fernando Bacarreza Bruno.
// Fuente: borrador-contenido-web-dr-bacarreza.md (copy) + design_handoff_web_medico/README.md (estructura/UX).
//
// Los campos marcados `pending: true` (o con comentario "[pendiente]") corresponden a bloques
// que el borrador de contenido deja explícitamente sin confirmar con el Dr. Bacarreza.
// NO completar con contenido inventado — se muestran con <PendingBadge> en la UI hasta que
// llegue la confirmación del cliente. Ver la lista completa de preguntas pendientes al final
// del borrador de contenido original.

import type {
	ClinicalCase,
	FaqItem,
	NavLink,
	Specialty,
	TimelineItem,
	Testimonial,
	SocialLink
} from './types';
import casoHumeroRadiografia1 from './assets/images/casos/caso-humero-proximal-radiografia-1.jpg';
import casoHumeroRadiografia2 from './assets/images/casos/caso-humero-proximal-radiografia-2.jpg';
import casoHumeroRadiografia3 from './assets/images/casos/caso-humero-proximal-radiografia-3.jpg';
import casoGenuVaro1 from './assets/images/casos/caso-genu-varo-severo-1.jpg';
import casoGenuVaro2 from './assets/images/casos/caso-genu-varo-severo-2.jpg';
import casoGenuVaro3 from './assets/images/casos/caso-genu-varo-severo-3.jpg';
import casoGenuVaro4 from './assets/images/casos/caso-genu-varo-severo-4.jpg';
import casoGenuVaro5 from './assets/images/casos/caso-genu-varo-severo-5.jpg';
import casoGenuVaro6 from './assets/images/casos/caso-genu-varo-severo-6.jpg';
import casoAcetabulo1 from './assets/images/casos/caso-reconstruccion-acetabular-1.jpg';
import casoAcetabulo2 from './assets/images/casos/caso-reconstruccion-acetabular-2.jpg';
import casoAcetabulo3 from './assets/images/casos/caso-reconstruccion-acetabular-3.jpg';
import casoAcetabulo4 from './assets/images/casos/caso-reconstruccion-acetabular-4.jpg';
import casoAcetabulo5 from './assets/images/casos/caso-reconstruccion-acetabular-5.jpg';
import casoAcetabulo6 from './assets/images/casos/caso-reconstruccion-acetabular-6.jpg';
import casoAcetabulo7 from './assets/images/casos/caso-reconstruccion-acetabular-7.jpg';
import casoAcetabulo8 from './assets/images/casos/caso-reconstruccion-acetabular-8.jpg';

export const siteName = 'Dr. Fernando Bacarreza Bruno';

// El nav del handoff (README) usa 5 anclas; el logo/nombre en el header ya enlaza a #inicio,
// por eso "Inicio" no se repite como link de nav (el borrador de contenido original sí lo listaba).
export const navLinks: NavLink[] = [
	{ label: 'Sobre el Dr.', href: '#sobre' },
	{ label: 'Especialidades', href: '#especialidades' },
	{ label: 'Trayectoria', href: '#trayectoria' },
	{ label: 'Intervenciones', href: '#intervenciones' },
	{ label: 'Preguntas frecuentes', href: '#faq' },
	{ label: 'Contacto', href: '#contacto' }
];

// --- WhatsApp / contacto ---
// El número 77210582 está marcado "confirmado" en el README de diseño, pero el borrador de
// contenido (secciones 1 y 10) lo deja como pendiente de reconfirmar con el cliente antes de
// publicar. Se usa igual para los CTAs de WhatsApp por indicación explícita del cliente,
// dejando esta nota como recordatorio.
export const whatsappNumber = '59177210582';
export const whatsappDefaultMessage = 'Hola, quisiera agendar una consulta con el Dr. Bacarreza.';

export function whatsappHref(message: string = whatsappDefaultMessage): string {
	return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contactInfo = {
	address: 'Calle 6, Obrajes, esq. Av. Héctor Ormachea N.º 269, Edificio CES, Piso 4, Consultorio 407, La Paz, Bolivia',
	landline: '22750683',
	// Mismo número que whatsappNumber, en formato local para mostrar en pantalla.
	whatsappDisplay: '77210582',
	hours: 'Lunes, miércoles y viernes, 17:00 a 20:00',
	// Coordenadas exactas del Edificio CES (verificadas en Google Maps), para que el pin del
	// embed caiga sobre el edificio en vez de aproximar por geocodificación de texto.
	coordinates: { lat: -16.5260338, lng: -68.11025599999999 }
};

// Embed de Google Maps sin API key, centrado en las coordenadas exactas del consultorio (más
// preciso que geocodificar la dirección por texto). Si más adelante se cuenta con una Maps
// Embed API key, se puede migrar a `https://www.google.com/maps/embed/v1/place?key=...` sin
// perder esta precisión.
export function googleMapsEmbedSrc(): string {
	const { lat, lng } = contactInfo.coordinates;
	return `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`;
}

// --- Hero ---
export const heroKicker = 'Traumatología y ortopedia — La Paz, Bolivia';

export const heroTagline = 'Cirugía reconstructiva y artroscópica de hombro y rodilla';

export const heroSupportText =
	'Traumatólogo ortopedista boliviano, con formación y actividad académica internacional en artroscopia y medicina deportiva. Miembro del Consejo Directivo de SLARD y Expresidente de ABAMED.';

// Versión corta de los 4 badges de confianza, pensada para los tags de una sola línea del hero.
export const heroBadges: string[] = [
	'Jefe de Traumatología — Seguro Social Universitario (UMSA)',
	'Consejo Directivo SLARD',
	'Expresidente ABAMED',
	'Coautor, Journal of ISAKOS',
	'Coautor de Tratado de Cirugía Ortopédica y Traumatología'
];

// --- Sobre el Dr. ---
// 5 párrafos biográficos del borrador, con marcado HTML inline (<strong>/<em>) para las
// mismas frases que el prototipo de diseño resalta — son strings propios del contenido
// (no input de usuario), por eso el componente los renderiza con {@html}.
// Años de trayectoria confirmados por el Dr. Bacarreza (16 años) — ya no es un dato pendiente.
export const aboutParagraphs: string[] = [
	'Con más de 16 años de trayectoria en traumatología y ortopedia, el Dr. Fernando Bacarreza Bruno se especializa en cirugía reconstructiva y artroscópica de hombro y rodilla, combinando la práctica clínica diaria en La Paz con una activa participación en la comunidad científica latinoamericana.',
	'Es <strong>Jefe del Departamento de Traumatología del Seguro Social Universitario</strong>, afiliado a la Universidad Mayor de San Andrés (UMSA), donde combina la atención a pacientes con la formación de nuevos especialistas. Es docente titular de la cátedra de Traumatología en la UMSA desde hace 12 años, y fue jefe de dicha cátedra entre 2022 y 2024.',
	'A nivel internacional, forma parte del <strong>Consejo Directivo de SLARD</strong> (Sociedad Latinoamericana de Artroscopia, Rodilla y Deporte) y se desempeña como <strong>Coordinador País por Bolivia</strong>, representando al país en foros científicos junto a especialistas de Argentina, Brasil, Chile, Colombia, Ecuador, Paraguay, Perú y Uruguay. En Bolivia, es <strong>Expresidente de ABAMED</strong> (Asociación Boliviana de Artroscopia y Medicina Deportiva), sociedad que organiza regularmente cursos y congresos con expositores internacionales en La Paz.',
	'Su compromiso con la actualización constante lo ha llevado a participar como ponente en congresos internacionales — como el XXIX Congreso SLAOT (San José, Costa Rica, 2023) y las Jornadas Latinoamericanas SLARD (Santiago de Chile, 2025) — y a capacitarse directamente con fabricantes líderes de tecnología en artroscopia, como Arthrex, en Estados Unidos.',
	'Es coautor de una publicación científica en el <em>Journal of ISAKOS</em> (International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine), sobre consenso latinoamericano en reconstrucción de ligamento cruzado anterior — evidencia de que su práctica está respaldada por investigación de nivel internacional. Además, es coautor de "Inestabilidad en el hombro" (junto a C. Jette Mostacedo y F. A. Claros Pizarro) en el <em>Tratado de Cirugía Ortopédica y Traumatología</em>, obra de referencia editada por Pere Torner Pifarré y Javier Vaquero Martín (Editorial Médica Panamericana).'
];

// Frase personal confirmada por el Dr. Bacarreza — ya no es un dato pendiente.
export const aboutPersonalQuote = {
	text: 'Tu recuperación es mi prioridad: te escucho, te explico y te acompaño, porque el objetivo no es solo curar la lesión, sino devolverte tu vida con confianza.'
};

export const credentialLine = 'Colegio Médico de La Paz, N.º B-0252 — Especialidad Traumatología y Ortopedia.';

// --- Especialidades ---
// Nombres de ícono = componentes de @lucide/svelte (PascalCase).
export const specialties: Specialty[] = [
	{
		icon: 'Activity',
		title: 'Cirugía artroscópica de hombro',
		description:
			'Diagnóstico y tratamiento mínimamente invasivo de lesiones del manguito rotador e inestabilidad de hombro.'
	},
	{
		icon: 'Target',
		title: 'Cirugía artroscópica de rodilla',
		description:
			'Reconstrucción de ligamento cruzado anterior (LCA), reparación meniscal y tratamiento de lesiones deportivas de rodilla.'
	},
	{
		icon: 'ShieldCheck',
		title: 'Reparación meniscal y medicina regenerativa',
		description:
			'Uso de técnicas actualizadas y ortobiológicos como adyuvante en la reparación de meniscos — área en la que el Dr. Bacarreza ha sido ponente internacional.'
	},
	{
		icon: 'Zap',
		title: 'Traumatología deportiva',
		description:
			'Evaluación y tratamiento de lesiones relacionadas con la actividad física y deportiva, en pacientes de distintas edades.'
	},
	{
		icon: 'User',
		title: 'Traumatología general de adultos',
		description:
			'Diagnóstico y tratamiento de fracturas, lesiones articulares y patologías del sistema musculoesquelético.'
	},
	{
		icon: 'Bone',
		title: 'Cirugía de reemplazo articular',
		description:
			'Colocación de prótesis de rodilla y cadera en pacientes con artrosis avanzada, deformidades articulares (como genu varo) o fracturas complejas que comprometen la articulación.'
	}
];

// --- Trayectoria ---
export const timeline: TimelineItem[] = [
	{
		year: '2022',
		text: 'Jefe de la Cátedra de Traumatología, Universidad Mayor de San Andrés (UMSA)'
	},
	{ year: '2023', text: 'Ponente, XXIX Congreso Internacional SLAOT, San José, Costa Rica' },
	{
		year: '2024',
		text: 'Organizador, Simposio Internacional de Lesiones Deportivas de Rodilla en Niños y Mujeres (ABAMED/SPAOT), La Paz'
	},
	{ year: '2025', text: 'Consejo Directivo SLARD, Jornadas Latinoamericanas, Santiago de Chile' },
	{
		year: '2025',
		text: 'Coordinador País (Bolivia) y moderador, Webinar SLARD: "Actualización en lesiones condrales de rodilla"'
	},
	{
		year: '2025',
		text: 'Ponente invitado, Webinar Internacional SBCJ (Sociedad Brasileña de Cirugía de Rodilla): "Uso de ortobiológicos como adyuvante en los reparos meniscales"'
	},
	{
		year: '2025',
		text: 'Expositor y organizador, VIII Congreso Nacional ABAMED, La Paz — ponencia "Salvar el menisco: abordaje diagnóstico"'
	},
	{
		year: '2026',
		text: 'Conferencista, Congreso SLARD, Perú — consenso ISAKOS sobre reconstrucción del ligamento anterolateral'
	},
	{
		year: '2026',
		text: 'Expositor, Congreso Nacional de Actualización en Medicina del Fútbol (ABAMED), Cochabamba'
	}
];

// --- Intervenciones (Casos clínicos) ---
// Sección nueva (borrador, sección 5.1). Diseñada como lista, no como bloque fijo de un caso —
// se pueden agregar más casos con el tiempo sin tocar el componente (ClinicalCases.svelte /
// ClinicalCaseCard.svelte), sólo agregando entradas a `clinicalCases`.
export const casesKicker = 'Casos clínicos';
export const casesHeading = 'Intervenciones recientes';
export const casesIntro =
	'Cada intervención es distinta. Compartimos algunos casos reales para mostrar el tipo de trabajo que realiza el Dr. Bacarreza — siempre con el objetivo de una recuperación funcional completa.';

export const clinicalCases: ClinicalCase[] = [
	{
		slug: 'fractura-humero-proximal',
		title: 'Fractura de húmero proximal',
		context:
			'Las fracturas de húmero proximal —la parte superior del brazo, cerca del hombro— requieren una reducción anatómica precisa para restaurar la movilidad completa del paciente. En este caso, la fijación se realizó con placa y tornillos, buscando una consolidación estable del hueso.',
		// Radiografías sin EXIF ni texto identificable del paciente visible en el encuadre
		// (revisado antes de subir). Consentimiento del paciente confirmado por el Dr. Bacarreza
		// para uso de marketing.
		images: [casoHumeroRadiografia1, casoHumeroRadiografia2, casoHumeroRadiografia3],
		// Video alojado en Cloudflare R2 (fuera de Vite/git), reproducido con el <video> nativo —
		// mismo patrón que el caso 2. Reemplaza el embed de YouTube que tenía este caso antes.
		videos: ['https://videos.drfernandobacarreza.com/caso01.mp4'],
		videoTitle:
			'Video demostrativo: reducción y fijación de fractura de húmero proximal — Dr. Fernando Bacarreza'
	},
	{
		slug: 'extrusion-meniscal-lateral',
		title: 'Extrusión meniscal lateral',
		context: 'Dx: Extrusión meniscal lateral. Cirugía: centralización con túneles.',
		images: [],
		// Videos alojados en Cloudflare R2 (fuera de Vite/git) — no son imports de asset local.
		// Orden entre los 3 videos es indiferente.
		videos: [
			'https://videos.drfernandobacarreza.com/caso02/extrusion-meniscal-01.mp4',
			'https://videos.drfernandobacarreza.com/caso02/extrusion-meniscal-02.mp4',
			'https://videos.drfernandobacarreza.com/caso02/extrusion-meniscal-03.mp4'
		],
		videoTitle: 'Extrusión meniscal lateral — centralización con túneles'
		// Consentimiento del paciente confirmado por el Dr. Bacarreza para uso de marketing.
	},
	{
		slug: 'protesis-total-rodilla-genu-varo',
		title: 'Prótesis total de rodilla (genu varo severo)',
		context: 'Prótesis total de rodilla en paciente con genu varo severo.',
		// Fotos ya limpias de datos identificables (sin EXIF, provistas por el Dr. Bacarreza).
		// Consentimiento del paciente confirmado para uso de marketing. Orden entre las 6 fotos
		// dentro de la galería es indiferente.
		images: [
			casoGenuVaro1,
			casoGenuVaro2,
			casoGenuVaro3,
			casoGenuVaro4,
			casoGenuVaro5,
			casoGenuVaro6
		]
	},
	{
		slug: 'reconstruccion-acetabular-protesis-cadera',
		title: 'Reconstrucción acetabular y prótesis de cadera',
		context:
			'Paciente con una fractura acetabular compleja, asociada a artrosis de la cabeza femoral. Se le realizó una reconstrucción y reparación del acetábulo, junto con la colocación de una prótesis de cadera.',
		// Fotos ya limpias de datos identificables (sin EXIF, provistas por el Dr. Bacarreza).
		// Consentimiento del paciente confirmado para uso de marketing. Orden entre las 8 fotos
		// dentro de la galería es indiferente.
		images: [
			casoAcetabulo1,
			casoAcetabulo2,
			casoAcetabulo3,
			casoAcetabulo4,
			casoAcetabulo5,
			casoAcetabulo6,
			casoAcetabulo7,
			casoAcetabulo8
		]
	}
];

// --- Patologías / Cuándo consultar ---
export const pathologies: string[] = [
	'Dolor persistente en hombro o rodilla que no mejora con reposo',
	'Una lesión deportiva reciente (esguince, torsión, golpe articular)',
	'Sensación de inestabilidad o "fallo" articular al caminar o moverte',
	'Chasquidos, bloqueos o hinchazón en la rodilla',
	'Limitación de movimiento en el hombro',
	'Una lesión de menisco o ligamento diagnosticada por otro profesional y buscas una segunda opinión'
];

// --- Qué esperar en tu consulta ---
export const firstVisitText =
	'En tu primera consulta, el Dr. Bacarreza revisará tu historial médico, realizará una evaluación física de la zona afectada y, si es necesario, solicitará estudios de imagen (radiografía, resonancia magnética) para definir un diagnóstico preciso.';

export const whatToBring: string[] = [
	'Estudios de imagen previos (radiografías, resonancias, ecografías), si los tienes',
	'Informes médicos o diagnósticos anteriores relacionados con tu consulta',
	'Lista de medicamentos que tomas actualmente'
];

export const consultationDurationNote =
	'La consulta tiene una duración aproximada de 20 minutos y se atiende con cita previa.';

// --- FAQ ---
export const faqs: FaqItem[] = [
	{
		question: '¿Necesito una cirugía para tratar mi lesión?',
		answer:
			'No siempre. Muchas lesiones se tratan primero con métodos conservadores (fisioterapia, medicación, infiltraciones). La cirugía se recomienda cuando el tratamiento conservador no es suficiente o cuando la lesión lo requiere directamente.'
	},
	{
		question: '¿Qué es la cirugía artroscópica?',
		answer:
			'Es una técnica mínimamente invasiva que permite diagnosticar y tratar lesiones articulares a través de pequeñas incisiones, con una cámara especializada. Generalmente implica menor dolor postoperatorio y una recuperación más rápida que la cirugía abierta tradicional.'
	},
	{
		question: '¿Cuánto tiempo toma la recuperación?',
		answer:
			'Depende del tipo de lesión y tratamiento. En la consulta, el Dr. Bacarreza te dará un estimado personalizado según tu caso.'
	},
	{
		question: '¿Atienden urgencias?',
		answer: 'Sí, se atienden emergencias.'
	},
	{
		question: '¿Trabajan con seguros médicos?',
		answer: 'Sí, trabaja con los seguros Alianza, Univida y Nacional Vida.'
	}
];

// --- Testimonios ---
// Atribución con iniciales únicamente (R.Q.S.) — se mantiene así porque no se confirmó el
// nombre completo de la paciente, aunque el Dr. Bacarreza ya confirmó el consentimiento de uso
// del testimonio con fines de marketing.
export const testimonials: Testimonial[] = [
	{
		quote:
			'Agradezco a Dios y al Dr. Bacarreza por la exitosa intervención quirúrgica [...] Todo ello se ve reflejado en mi situación actual, ya que gozo de buena salud, como resultado de una intervención quirúrgica y de una recuperación exitosas, y lo más importante, a la fecha no sufro de molestias o problema alguno.',
		attribution: 'R.Q.S., paciente tratada por fractura de tibia y peroné (2019)'
	}
];

// --- Footer / redes sociales ---
export const footerSocials: SocialLink[] = [
	{ label: 'Facebook', href: 'https://www.facebook.com/fernandobacarreza', icon: 'facebook' },
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/fernanado_bacarreza/',
		icon: 'instagram'
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/fernando-bacarreza-bruno-35230b28/',
		icon: 'linkedin'
	}
];
