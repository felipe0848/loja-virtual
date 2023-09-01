import { FilterType } from "@/types/FilterTypes";
import { PriorityType } from "@/types/PriorityTypes";

function GetCategoryByType(type: FilterType) {
    if (type === FilterType.MUG) return "filter:{category: mugs}";
    if (type === FilterType.SHIRT) return "filter:{category: t-shirts}";
    return "";
}

function GetPriority(priority: PriorityType) {
    if (priority === PriorityType.BIGGEST_PRICE)
        return `sortField:"price_in_cents" sortOrder:"DSC"`;
    if (priority === PriorityType.MINOR_PRICE)
        return `sortField:"price_in_cents" sortOrder:"ASC"`;
    if (priority === PriorityType.POPULARITY)
        return `sortField:"sales" sortOrder:"DSC"`;
    if (priority === PriorityType.NEWS)
        return `sortField:"created_at" sortOrder:"DSC"`;
    return "";
}

export function montQuery(
    type: FilterType,
    priority: PriorityType,
    page: number
) {
    return `query{
        allProducts (${GetPriority(priority)} ${GetCategoryByType(
        type
    )} page:${page} perPage: 12){
          id
          name
          image_url
          price_in_cents
          }
      }`;
}
