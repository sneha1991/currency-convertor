import { CountryCodeResponse, CountryList } from "../../models/country.model";

export const mock_countries = [
    { code: 'INR', name: 'INDIA', flagUrl: 'https://wise.com/public-resources/assets/flags/rectangle/inr.png' },
    { code: 'USD', name: 'US', flagUrl: 'https://wise.com/public-resources/assets/flags/rectangle/usd.png' },
    { code: 'GBP', name: 'ENGLAND', flagUrl: 'https://wise.com/public-resources/assets/flags/rectangle/gbp.png' },
  ];

 
  

export const mock_res: CountryList =
[
    [
        "INR",
        "INDIA"
    ],
    [
        "USD",
        "US"
    ],
    [
      "GBP",
      "ENGLAND"
  ],
   
]

export const mock_country_response: CountryCodeResponse = {
  supported_codes: mock_res
}


  export const mock_Amount = [{
  result: "success",
  base_code: "GBP",
	target_code: "INR",
  conversion_rate: 105.2,
  conversion_result: 1052,
	time_last_update_utc: "Tue, 02 Jul 2024 00:00:01 +0000",
	time_next_update_utc: "Wed, 03 Jul 2024 00:00:01 +0000",
  }
  ]