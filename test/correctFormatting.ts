// https://typescript-eslint.io/rules/consistent-generic-constructors/
const map = new Map<string, number>();

console.log(map);
// ----

// https://typescript-eslint.io/rules/consistent-type-assertions/
type TypeAssertionTest = {
	someProperty: string;
};

function someFunction() {
	const thing: TypeAssertionTest = {
		someProperty: 'hi'
	};

	const oneMoreThing = thing as unknown;

	console.log(oneMoreThing);
}

someFunction();
// ----

// https://typescript-eslint.io/rules/consistent-indexed-object-style/
type IndexedObjectStyle = Record<string, number>;

const objectStyle: IndexedObjectStyle = { hello: 42 };

console.log(objectStyle);
// ----

// https://typescript-eslint.io/rules/consistent-type-exports/
type ConsistentTypeExports = string;

export type { ConsistentTypeExports };
// ----

// https://typescript-eslint.io/rules/consistent-type-imports/
import type { ConsistentTypeImports } from './ConsistentTypeImports';

console.log('hi' as ConsistentTypeImports);
// ----
