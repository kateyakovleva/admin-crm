export interface ILanguages {
	items: ILanguage[];
	count: number;
}

export interface ILanguage {
	id: number;
	name: string;
	language: string;
	country: string;
	order: number;
}

export interface ILanguageProperty {
	[ key: string ]: string
}