/*! https://mths.be/iso-8859-4 v3.0.4 by @mathias | MIT license */

const stringFromCharCode = String.fromCharCode;

const INDEX_BY_CODE_POINT = new Map([
	[128, 0],
	[129, 1],
	[130, 2],
	[131, 3],
	[132, 4],
	[133, 5],
	[134, 6],
	[135, 7],
	[136, 8],
	[137, 9],
	[138, 10],
	[139, 11],
	[140, 12],
	[141, 13],
	[142, 14],
	[143, 15],
	[144, 16],
	[145, 17],
	[146, 18],
	[147, 19],
	[148, 20],
	[149, 21],
	[150, 22],
	[151, 23],
	[152, 24],
	[153, 25],
	[154, 26],
	[155, 27],
	[156, 28],
	[157, 29],
	[158, 30],
	[159, 31],
	[160, 32],
	[164, 36],
	[167, 39],
	[168, 40],
	[173, 45],
	[175, 47],
	[176, 48],
	[180, 52],
	[184, 56],
	[193, 65],
	[194, 66],
	[195, 67],
	[196, 68],
	[197, 69],
	[198, 70],
	[201, 73],
	[203, 75],
	[205, 77],
	[206, 78],
	[212, 84],
	[213, 85],
	[214, 86],
	[215, 87],
	[216, 88],
	[218, 90],
	[219, 91],
	[220, 92],
	[223, 95],
	[225, 97],
	[226, 98],
	[227, 99],
	[228, 100],
	[229, 101],
	[230, 102],
	[233, 105],
	[235, 107],
	[237, 109],
	[238, 110],
	[244, 116],
	[245, 117],
	[246, 118],
	[247, 119],
	[248, 120],
	[250, 122],
	[251, 123],
	[252, 124],
	[256, 64],
	[257, 96],
	[260, 33],
	[261, 49],
	[268, 72],
	[269, 104],
	[272, 80],
	[273, 112],
	[274, 42],
	[275, 58],
	[278, 76],
	[279, 108],
	[280, 74],
	[281, 106],
	[290, 43],
	[291, 59],
	[296, 37],
	[297, 53],
	[298, 79],
	[299, 111],
	[302, 71],
	[303, 103],
	[310, 83],
	[311, 115],
	[312, 34],
	[315, 38],
	[316, 54],
	[325, 81],
	[326, 113],
	[330, 61],
	[331, 63],
	[332, 82],
	[333, 114],
	[342, 35],
	[343, 51],
	[352, 41],
	[353, 57],
	[358, 44],
	[359, 60],
	[360, 93],
	[361, 125],
	[362, 94],
	[363, 126],
	[370, 89],
	[371, 121],
	[381, 46],
	[382, 62],
	[711, 55],
	[729, 127],
	[731, 50]
]);
const INDEX_BY_POINTER = new Map([
	[0, '\x80'],
	[1, '\x81'],
	[2, '\x82'],
	[3, '\x83'],
	[4, '\x84'],
	[5, '\x85'],
	[6, '\x86'],
	[7, '\x87'],
	[8, '\x88'],
	[9, '\x89'],
	[10, '\x8A'],
	[11, '\x8B'],
	[12, '\x8C'],
	[13, '\x8D'],
	[14, '\x8E'],
	[15, '\x8F'],
	[16, '\x90'],
	[17, '\x91'],
	[18, '\x92'],
	[19, '\x93'],
	[20, '\x94'],
	[21, '\x95'],
	[22, '\x96'],
	[23, '\x97'],
	[24, '\x98'],
	[25, '\x99'],
	[26, '\x9A'],
	[27, '\x9B'],
	[28, '\x9C'],
	[29, '\x9D'],
	[30, '\x9E'],
	[31, '\x9F'],
	[32, '\xA0'],
	[33, '\u0104'],
	[34, '\u0138'],
	[35, '\u0156'],
	[36, '\xA4'],
	[37, '\u0128'],
	[38, '\u013B'],
	[39, '\xA7'],
	[40, '\xA8'],
	[41, '\u0160'],
	[42, '\u0112'],
	[43, '\u0122'],
	[44, '\u0166'],
	[45, '\xAD'],
	[46, '\u017D'],
	[47, '\xAF'],
	[48, '\xB0'],
	[49, '\u0105'],
	[50, '\u02DB'],
	[51, '\u0157'],
	[52, '\xB4'],
	[53, '\u0129'],
	[54, '\u013C'],
	[55, '\u02C7'],
	[56, '\xB8'],
	[57, '\u0161'],
	[58, '\u0113'],
	[59, '\u0123'],
	[60, '\u0167'],
	[61, '\u014A'],
	[62, '\u017E'],
	[63, '\u014B'],
	[64, '\u0100'],
	[65, '\xC1'],
	[66, '\xC2'],
	[67, '\xC3'],
	[68, '\xC4'],
	[69, '\xC5'],
	[70, '\xC6'],
	[71, '\u012E'],
	[72, '\u010C'],
	[73, '\xC9'],
	[74, '\u0118'],
	[75, '\xCB'],
	[76, '\u0116'],
	[77, '\xCD'],
	[78, '\xCE'],
	[79, '\u012A'],
	[80, '\u0110'],
	[81, '\u0145'],
	[82, '\u014C'],
	[83, '\u0136'],
	[84, '\xD4'],
	[85, '\xD5'],
	[86, '\xD6'],
	[87, '\xD7'],
	[88, '\xD8'],
	[89, '\u0172'],
	[90, '\xDA'],
	[91, '\xDB'],
	[92, '\xDC'],
	[93, '\u0168'],
	[94, '\u016A'],
	[95, '\xDF'],
	[96, '\u0101'],
	[97, '\xE1'],
	[98, '\xE2'],
	[99, '\xE3'],
	[100, '\xE4'],
	[101, '\xE5'],
	[102, '\xE6'],
	[103, '\u012F'],
	[104, '\u010D'],
	[105, '\xE9'],
	[106, '\u0119'],
	[107, '\xEB'],
	[108, '\u0117'],
	[109, '\xED'],
	[110, '\xEE'],
	[111, '\u012B'],
	[112, '\u0111'],
	[113, '\u0146'],
	[114, '\u014D'],
	[115, '\u0137'],
	[116, '\xF4'],
	[117, '\xF5'],
	[118, '\xF6'],
	[119, '\xF7'],
	[120, '\xF8'],
	[121, '\u0173'],
	[122, '\xFA'],
	[123, '\xFB'],
	[124, '\xFC'],
	[125, '\u0169'],
	[126, '\u016B'],
	[127, '\u02D9']
]);

// https://encoding.spec.whatwg.org/#error-mode
const decodingError = (mode) => {
	if (mode === 'replacement') {
		return '\uFFFD';
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

const encodingError = (mode) => {
	if (mode === 'replacement') {
		return 0xFFFD;
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

// https://encoding.spec.whatwg.org/#single-byte-decoder
export const decode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `replacement` (default) or `fatal` for a
	// decoder.”
	if (mode !== 'replacement' && mode !== 'fatal') {
		mode = 'replacement';
	}

	const length = input.length;

	// Support byte strings as input.
	if (typeof input === 'string') {
		const bytes = new Uint16Array(length);
		for (let index = 0; index < length; index++) {
			bytes[index] = input.charCodeAt(index);
		}
		input = bytes;
	}

	const buffer = [];
	for (let index = 0; index < length; index++) {
		const byteValue = input[index];
		// “If `byte` is an ASCII byte, return a code point whose value is
		// `byte`.”
		if (0x00 <= byteValue && byteValue <= 0x7F) {
			buffer.push(stringFromCharCode(byteValue));
			continue;
		}
		// “Let `code point` be the index code point for `byte − 0x80` in index
		// single-byte.”
		const pointer = byteValue - 0x80;
		if (INDEX_BY_POINTER.has(pointer)) {
			// “Return a code point whose value is `code point`.”
			buffer.push(INDEX_BY_POINTER.get(pointer));
		} else {
			// “If `code point` is `null`, return `error`.”
			buffer.push(decodingError(mode));
		}
	}
	const result = buffer.join('');
	return result;
};

// https://encoding.spec.whatwg.org/#single-byte-encoder
export const encode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// Support `fatal` (default) and `replacement` error modes.
	if (mode !== 'fatal' && mode !== 'replacement') {
		mode = 'fatal';
	}
	const length = input.length;
	const result = new Uint16Array(length);
	for (let index = 0; index < length; index++) {
		const codePoint = input.charCodeAt(index);
		// “If `code point` is an ASCII code point, return a byte whose
		// value is `code point`.”
		if (0x00 <= codePoint && codePoint <= 0x7F) {
			result[index] = codePoint;
			continue;
		}
		// “Let `pointer` be the index pointer for `code point` in index
		// single-byte.”
		if (INDEX_BY_CODE_POINT.has(codePoint)) {
			const pointer = INDEX_BY_CODE_POINT.get(codePoint);
			// “Return a byte whose value is `pointer + 0x80`.”
			result[index] = pointer + 0x80;
		} else {
			// “If `pointer` is `null`, return `error` with `code point`.”
			result[index] = encodingError(mode);
		}
	}
	return result;
};

export const labels = [
	'csisolatin4',
	'iso-8859-4',
	'iso-ir-110',
	'iso8859-4',
	'iso88594',
	'iso_8859-4',
	'iso_8859-4:1988',
	'l4',
	'latin4'
];
