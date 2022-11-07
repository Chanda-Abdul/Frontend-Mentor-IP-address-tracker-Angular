export interface Geolocation {
  ip_address: string;
  city: string;
  country?: string;
  continent?: string;
  region_iso_code: string;
  postal_code: number;
  longitude: number;
  latitude: number;
  timezone: {
      name: string;
      abbreviation: string;
      gmt_offset: number;
      current_time?: string;
      is_dst?: boolean;
  },
  	connection: {
		autonomous_system_number?: number;
		autonomous_system_organization?: string;
		connection_type?: string;
		isp_name: string;
		organization_name?: string;
	}
}

