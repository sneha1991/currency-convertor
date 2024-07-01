export interface CurrencyRequest {
  base: string;
  target: string;
  amount?: number;
}

export interface CurrencyResponse {
  result: string;
  base_code: string;
	target_code: string;
  conversion_rate?: number;
  conversion_result?: number;
	time_last_update_utc: string,
	time_next_update_utc: string,

}

export interface Currency {
  code: string;
  name?: string;
}