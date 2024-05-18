import { getLocation } from "@/utils/locationData";

export async function GET() {
  return Response.json(getLocation());
}
