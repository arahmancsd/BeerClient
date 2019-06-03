export interface Result {
    totalResults: number;
    numberOfPages: number;
    data?: Beer[];
    status: string;
}
export interface BeerResult {
    data: Beer;
    message: string;
    status: string;
}
export interface Beer {
    id: string;
    name: string;
    abv: string;
    CreateDate: Date;
    status: string;
    isOrganic: string;
    isRetired: string;
    nameDisplay: string;
    updateDate: Date;
    available?: Available;
    glass?: Glass;
    labels?: Labels;
    foodPairings?: string;
    style?: Style;
}
export interface SortOption {
    id: number;
    text: string;
    sortOrder: string;
    columnToSort: string;
}
export interface Available {
    id: number;
    description: string;
    name: string;
}
export interface Glass {
    id: number;
    name: string;
    createDate: Date;
}
export interface Labels {
    large: string;
    icon: string;
    medium: string;
    contentAwareIcon: string;
    contentAwareLarge: string;
    contentAwareMedium: string;
}
export interface Style {
    description: string;
    name: string;
    updateDate: Date;
    category?: StyleCategory;
}
export interface StyleCategory {
    id: number;
    createDate: Date;
    name: string;
}
export interface ServerPagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
}
