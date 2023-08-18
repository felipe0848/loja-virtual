import { FilterType } from "@/types/FilterTypes";
import { PriorityType } from "@/types/PriorityTypes";

export function GetCategoryByType(type: FilterType) {
    if (type === FilterType.MUG) return "mugs";
    if (type === FilterType.SHIRT) return "t-shirts";
    return "";
}

export function GetPriority(priority: PriorityType) {
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

export function montQuery(type: FilterType, priority: PriorityType) {
    if (type === FilterType.ALL && priority === PriorityType.POPULARITY)
        return `query{
    allProducts(sortField:"sales" sortOrder:"DSC"){
    id
    name
    image_url
    price_in_cents
}
}
`;
    else {
        const categoryType = GetCategoryByType(type);
        return `query{
        allProducts (${GetPriority(priority)}
            ${
                categoryType !== ""
                    ? `, filter:{category: "${categoryType}"}`
                    : ""
            }){
          id
          name
          image_url
          price_in_cents
          }
      }`;
    }
}
