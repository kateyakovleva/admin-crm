export function cn( ...args: string[] | null[] | undefined[] ): string {
	return args.map( ( arg ) => arg || '' ).join( ' ' );
}

// cn( class1, className2, 'classnedskdskd' )
// const args = [class1, className2, 'classnedskdskd']

// const options = {
// 	name: '0',
// 	type: 'sdsd',
// 	count: 2432
// }
//
// <Slider
// 	name={options.name}
// 	type={options.type}
// 	count={options.count}
// />

//
// <Slider
// {...options}
// />