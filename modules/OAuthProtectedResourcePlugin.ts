import {
  RuntimeExtensions,
  OAuthProtectedResourcePlugin,
} from "@zuplo/runtime";

export function runtimeInit(runtime: RuntimeExtensions) {
  runtime.addPlugin(
    new OAuthProtectedResourcePlugin({
      authorizationServers: [
        "https://demo-tearice.okta.com/oauth2/aus17473ylneqsiRk698",
      ],
      resourceName: "Zuplo Demo MCP",
    }),
  );
}