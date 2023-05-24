export interface Family {
  id: string;
  premium: boolean;
  details: Details;
}

export interface Details {
  name: string;
  description: string;
}
