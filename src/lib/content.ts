// Contenido del sitio del Dr. Fernando Bacarreza Bruno.
// Fuente: borrador-contenido-web-dr-bacarreza.md (copy) + design_handoff_web_medico/README.md (estructura/UX).
//
// Los campos marcados `pending: true` (o con comentario "[pendiente]") corresponden a bloques
// que el borrador de contenido deja explícitamente sin confirmar con el Dr. Bacarreza.
// NO completar con contenido inventado — se muestran con <PendingBadge> en la UI hasta que
// llegue la confirmación del cliente. Ver la lista completa de preguntas pendientes al final
// del borrador de contenido original.

import type { FaqItem, NavLink, Specialty, TimelineItem, Testimonial, SocialLink } from './types';

export const siteName = 'Dr. Fernando Bacarreza Bruno';

// El nav del handoff (README) usa 5 anclas; el logo/nombre en el header ya enlaza a #inicio,
// por eso "Inicio" no se repite como link de nav (el borrador de contenido original sí lo listaba).
export const navLinks: NavLink[] = [
	{ label: 'Sobre el Dr.', href: '#sobre' },
	{ label: 'Especialidades', href: '#especialidades' },
	{ label: 'Trayectoria', href: '#trayectoria' },
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
	whatsappPending: true, // "[confirmar si 77210582 es el número que quiere usar para agendar citas por WhatsApp]"
	hours: 'Lunes a viernes, 18:00 a 20:00',
	hoursPending: true // "[confirmar si sigue vigente]"
};

// Embed de Google Maps sin API key (geocodifica la dirección vía el parámetro `q`). Si más
// adelante se cuenta con una Maps Embed API key o coordenadas exactas del consultorio, conviene
// migrar a `https://www.google.com/maps/embed/v1/place?key=...&q=...` para mayor precisión.
export function googleMapsEmbedSrc(query: string = contactInfo.address): string {
	return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

// --- Hero ---
export const heroKicker = 'Traumatología y ortopedia — La Paz, Bolivia';

export const heroTagline = 'Cirugía reconstructiva y artroscópica de hombro y rodilla';

export const heroSupportText =
	'Traumatólogo ortopedista boliviano, con formación y actividad académica internacional en artroscopia y medicina deportiva. Miembro del Consejo Directivo de SLARD y Presidente electo de ABAMED.';

// Versión corta de los 4 badges de confianza, pensada para los tags de una sola línea del hero.
export const heroBadges: string[] = [
	'Jefe de Traumatología — Seguro Social Universitario (UMSA)',
	'Consejo Directivo SLARD',
	'Presidente electo ABAMED',
	'Coautor, Journal of ISAKOS'
];

// --- Sobre el Dr. ---
// 5 párrafos biográficos del borrador, con marcado HTML inline (<strong>/<em>) para las
// mismas frases que el prototipo de diseño resalta — son strings propios del contenido
// (no input de usuario), por eso el componente los renderiza con {@html}.
// El primer párrafo trae un dato pendiente de confirmar (años de trayectoria); el token
// {{YEARS_PENDING}} marca dónde insertar el <PendingBadge> inline en vez de un corchete plano.
export const aboutParagraphs: string[] = [
	'Con más de {{YEARS_PENDING}} de trayectoria en traumatología y ortopedia, el Dr. Fernando Bacarreza Bruno se especializa en cirugía reconstructiva y artroscópica de hombro y rodilla, combinando la práctica clínica diaria en La Paz con una activa participación en la comunidad científica latinoamericana.',
	'Es <strong>Jefe del Departamento de Traumatología del Seguro Social Universitario</strong>, afiliado a la Universidad Mayor de San Andrés (UMSA), donde combina la atención a pacientes con la formación de nuevos especialistas.',
	'A nivel internacional, forma parte del <strong>Consejo Directivo de SLARD</strong> (Sociedad Latinoamericana de Artroscopia, Rodilla y Deporte) y se desempeña como <strong>Coordinador País por Bolivia</strong>, representando al país en foros científicos junto a especialistas de Argentina, Brasil, Chile, Colombia, Ecuador, Paraguay, Perú y Uruguay. En Bolivia, es <strong>Presidente electo de ABAMED</strong> (Asociación Boliviana de Artroscopia y Medicina Deportiva), sociedad que organiza regularmente cursos y congresos con expositores internacionales en La Paz.',
	'Su compromiso con la actualización constante lo ha llevado a participar como ponente en congresos internacionales — como el XXIX Congreso SLAOT (San José, Costa Rica, 2023) y las Jornadas Latinoamericanas SLARD (Santiago de Chile, 2025) — y a capacitarse directamente con fabricantes líderes de tecnología en artroscopia, como Arthrex, en Estados Unidos.',
	'Es coautor de una publicación científica en el <em>Journal of ISAKOS</em> (International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine), sobre consenso latinoamericano en reconstrucción de ligamento cruzado anterior — evidencia de que su práctica está respaldada por investigación de nivel internacional.'
];

export const aboutPersonalQuote = {
	pending: true,
	note: 'Espacio para una frase personal del Dr. Bacarreza sobre su filosofía de atención al paciente — pedírsela directamente, en su propia voz.'
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
	}
];

export const specialtiesPendingNote =
	'Confirmar con el Dr. Bacarreza si desea agregar o quitar alguna línea de servicio — por ejemplo, si también atiende prótesis articulares, columna, u otras subespecialidades no mencionadas en el material revisado.';

// --- Trayectoria ---
export const timeline: TimelineItem[] = [
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
	}
];

export const timelineNote =
	'Esta sección se actualiza con cada nuevo evento académico del Dr. Bacarreza.';

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

export const consultationPendingNote =
	'Confirmar duración aproximada de la consulta, si se requiere cita previa siempre o si hay atención por urgencias, y método de pago aceptado.';

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
		answer:
			'La fuente pública indica "Emergencia bajo cita" — conviene verificar con el Dr. Bacarreza si esto sigue siendo así.',
		pending: true
	},
	{
		question: '¿Trabajan con seguros médicos?',
		answer:
			'El Dr. Bacarreza trabaja en el Seguro Social Universitario, pero falta aclarar si la consulta privada acepta seguros privados o solo pago particular.',
		pending: true
	}
];

// --- Testimonios ---
// Atribución con iniciales únicamente (R.Q.S.) — resguardo hasta tener consentimiento explícito
// de la paciente para publicar su nombre completo. El pendingNote es un badge propio, separado
// del texto del testimonio, que documenta puntualmente qué falta confirmar (el consentimiento
// de uso, no el contenido de la cita en sí).
export const testimonials: Testimonial[] = [
	{
		quote:
			'Agradezco a Dios y al Dr. Bacarreza por la exitosa intervención quirúrgica [...] Todo ello se ve reflejado en mi situación actual, ya que gozo de buena salud, como resultado de una intervención quirúrgica y de una recuperación exitosas, y lo más importante, a la fecha no sufro de molestias o problema alguno.',
		attribution: 'R.Q.S., paciente tratada por fractura de tibia y peroné (2019)',
		pending: true,
		pendingNote: 'Consentimiento de uso con fines de marketing'
	}
];

// --- Footer / redes sociales ---
// Ambas quedan pendientes en la UI: Facebook está confirmado como canal a vincular pero falta
// la URL exacta de la página; LinkedIn existe pero está poco activo, a confirmar si se vincula.
export const footerSocials: SocialLink[] = [
	{ label: 'Facebook', href: null, pending: true },
	{ label: 'LinkedIn', href: null, pending: true }
];
