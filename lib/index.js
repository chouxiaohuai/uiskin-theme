// uiskin-theme — Host half (static profile bundle).
// The whole skin lives in the client half (lib/client.js, served as
// /plugins/uiskin-theme/client.js). This host half exists so the Loader row
// can import the package and activate it; it intentionally does nothing.
export const name = "uiskin-theme";

export function apply() {
  // No host-side work: all assets are inlined into the client bundle, so
  // there is nothing to read from disk or serve over RPC.
}

export const inject = [];
