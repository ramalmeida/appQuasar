export enum CityRoutename {
    List = 'CITY_LIST',
    Create = 'CITY_CREATE',
    Update = 'CITY_UPDATE',
    View = 'CITY_VIEW',
    Remove = 'CITY_REMOVE',
}

export enum CityRoutePath {
    List = '/',
    Create = '/register',
    Update = 'update/:id',
    View = 'view/:id',
    Remove = 'remove/:id',
}
