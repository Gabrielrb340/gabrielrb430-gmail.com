export interface MediaCharacters {
    data: Data;
  }
  export interface Data {
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
    synopsis: string;
    coverImageTopOffset: number;
    titles: Titles;
    canonicalTitle: string;
    abbreviatedTitles?: null;
    averageRating: string;
    ratingFrequencies: RatingFrequencies;
    userCount: number;
    favoritesCount: number;
    startDate: string;
    endDate: string;
    nextRelease?: null;
    popularityRank: number;
    ratingRank: number;
    ageRating?: null;
    ageRatingGuide: string;
    subtype: string;
    status: string;
    tba: string;
    posterImage: PosterImage;
    coverImage?: null;
    chapterCount: number;
    volumeCount: number;
    serialization: string;
    mangaType: string;
  }
  export interface Titles {
    en?: null;
    en_jp: string;
  }
  export interface RatingFrequencies {
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    15: string;
    16: string;
    17: string;
    18: string;
    19: string;
    20: string;
  }
  export interface PosterImage {
    tiny: string;
    small: string;
    medium: string;
    large: string;
    original: string;
    meta: Meta;
  }
  export interface Meta {
    dimensions: Dimensions;
  }
  export interface Dimensions {
    tiny: ImageSize;
    small: ImageSize;
    medium: ImageSize;
    large: ImageSize;
  }
  export interface ImageSize {
    width?: null;
    height?: null;
  }
  export interface Relationships {
    genres: Link;
    categories: Link;
    castings: Link;
    installments: Link;
    mappings: Link;
    reviews: Link;
    mediaRelationships: Link;
    characters: Link;
    staff: Link;
    productions: Link;
    quotes: Link;
    chapters: Link;
    mangaCharacters: Link;
    mangaStaff: Link;
  }
  export interface Link {
    links: Links;
  }
  export interface Links {
    self: string;
    related: string;
  }
  