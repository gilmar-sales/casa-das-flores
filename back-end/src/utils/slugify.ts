import { v4 } from 'uuid'

export default function slugify(name: string, genUuid?: boolean) {
	const map = {
		'-': ' |_',
		a: 'á|à|ã|â|À|Á|Ã|Â',
		e: 'é|è|ê|É|È|Ê',
		i: 'í|ì|î|Í|Ì|Î',
		o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
		u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
		c: 'ç|Ç',
		n: 'ñ|Ñ',
	}

	for (var pattern in map) {
		name = name.replace(new RegExp(map[pattern], 'g'), pattern)
	}

	if (genUuid) {
		const uuid = v4().split('-')[0]
		return name.toLowerCase().concat(`-${uuid}`)
	}

	return name.toLowerCase()
}
