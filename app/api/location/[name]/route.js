import { getLocationByName } from "@/utils/locationData";

export async function GET(_request,{params:{name}}){
   const location=getLocationByName(name)
   return Response.json(location)
}