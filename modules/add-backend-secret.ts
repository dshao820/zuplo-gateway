import { ZuploContext, ZuploRequest, environment } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  request.headers.set("x-backend-secret", environment.BACKEND_SECRET);
  return request;
}
