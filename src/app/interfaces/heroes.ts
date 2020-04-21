export interface Heroes {
  data?: (DataEntity)[] | null;
  meta: Meta;
  links: Links;
}
export interface DataEntity {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}
export interface Links {
  self: string;
}
export interface Attributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  name: string;
  malId: number;
  description: string;
  image: Image;
}
export interface Image {
  original: string;
}
export interface Relationships {
  primaryMedia: PrimaryMediaOrCastings;
  castings: PrimaryMediaOrCastings;
  mediaCharacters: MediaCharacters;
  media:Media;
}
export interface PrimaryMediaOrCastings {
  links: Links;
}

export interface Meta {
  count: number;
}
export interface Links {
  first: string;
  prev: string;
  next: string;
  last: string;
  self: string;
  related: string;
  
}
export interface MediaCharacters {
  links: Links;
}
export interface HeroData {
  data: DataObject;
}
export interface DataObject {
  id: string;
  type: string;
  links: Links;
  relationships: Relationships;
}

export interface Media {
  links: Links;
}