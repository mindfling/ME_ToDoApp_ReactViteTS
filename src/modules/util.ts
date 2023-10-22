// * utilities methodes

// capitalize 1st char of str
export const toCapitalizeString = (str: string): string =>
  `${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`;

// get random int number incleded min .. max
export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// generate randow id string
export const getRandomId: () => string = () =>
  `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(3, 11)}`;
// `id-${Math.random().toString(32).substring(2, 10)}-0x-${Date.now().toString(16).substring(3, 11)}`;



// * transliterate name of user for hash storage key
// simplified for aur needs
export const trans = (word: string): string => {
  const chars: {[key: string]: string} = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'э': 'e',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'ы': 'i',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': '4',
    'ш': 'sh',
    'щ': 'w',
    'ъ': '',
    'ь': '',
    'ю': 'u',
    'я': 'a',
    ',': '',
    '-': '_',
    '+': '',
    '*': '',
    ' ': '_',
    '\'': '',
    '"': '',
    '\\': '',
    '`': '',
    '/': '',
    '': '',
  };
  const result = word.toLowerCase().split('').map((char: string) => {
    return chars[char] || ((chars[char] === '') ? chars[char] : char);
  }).join('');
  return result;
};

