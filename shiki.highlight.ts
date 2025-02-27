import { codeToHtml } from 'shiki';

export default async function highlight(code: string, lang: string) {
	const themes = {
		light: 'min-light',
		dark: 'nord'
	};

	const generated = await codeToHtml(code, {
		lang,
		themes
	});

	const text = `\`${generated}\``;

	return `{@html ${text}}`;
}
