export enum ServiceType {
  LOGO = 'Logo Design',
  THUMBNAIL = 'Thumbnail Design',
  UI = 'UI/UX Design'
}

export interface ServiceTierFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface ServiceTier {
  name: string; // Basic, Standard, Premium
  price: string;
  description: string;
  features: ServiceTierFeature[];
}

export interface ServiceCategory {
  type: ServiceType;
  tiers: ServiceTier[];
}

export interface ProjectLink {
  title: string;
  url: string;
  description: string;
  type: 'drive' | 'itchio' | 'external';
}
