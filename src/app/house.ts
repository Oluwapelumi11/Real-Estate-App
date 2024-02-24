export interface Property {
    id: number,
    images: images[],
    title: string,
    property_category: string,
    price: string,
    street: string,
    city: string,
    zip_code: string,
    status: string,
    date_listed: string,
    plot_size: string,
    roof_type: string,
    construction_company: string,
    cooling: string,
    interior_size: string,
    bedroom: string,
    bedroom_size: string,
    bathroom: string,
    bathroom_size: string,
    garage: string,
    laundry_room_equipment: string,
    living_room_size: string,
    kitchen: string,
    featured: boolean,
    description: string,
    owner: number,
    days_on_site: number
}

export interface images {
    id: number,
    image: string
}
