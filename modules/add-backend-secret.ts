import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  request.headers.set("x-backend-secret", context.env.BACKEND_SECRET);
  return request;
}
