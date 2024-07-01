// export interface Country {
//   currencies: {
//     [key: string]: {
//       name: string;
//       symbol: string;
//     };
//   };
// }

export interface Country {
  code: string;
  name: string;
  flagUrl?: string;
}

export interface CountryList {
  supported_codes: [];
}
