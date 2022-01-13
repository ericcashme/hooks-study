export type HomePhoto = {
  listOrder: number;
  url: string;
};

export type PriceRange = {
  minPrice: number;
  maxPrice: number;
};

export type HomeSeasonPricing = {
  highSeason: PriceRange;
  lowSeason: PriceRange;
};

export type PeriodProps = {
  checkIn: string;
  checkOut: string;
};

export type HomeProps = {
  id: string;
  title: string;
  photos: [HomePhoto];
  roomsCount: number;
  bathroomsCount: number;
  maxOccupancy: number;
  hasPool: boolean;
  seasonPricing: HomeSeasonPricing;
  cityName: string;
  stateName: string;
  stateCode: string;
};

export type RegionProps = {
  id: string;
  name: string;
  stateCode: string;
};

export type GuestsProps = {
  id: number;
  name: string;
};

export type OrderProps = {
  id: string;
  name: string;
};

export type SearchProps = {
  region?: RegionProps;
  period?: PeriodProps;
  guests: GuestsProps;
  order: OrderProps;
  coupon?: string;
};
