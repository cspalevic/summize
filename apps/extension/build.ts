import { build as _build } from "esbuild";

type BuildOptions = Parameters<typeof _build>[0];

export const buildOptions: BuildOptions = {
  entryPoints: [
    "./src/modules/popup/index.tsx",
    "./src/modules/options/index.tsx",
  ],
  outdir: "public/assets",
  bundle: true,
  minify: true,
  sourcemap: true,
};

export const build = async () => {
  await _build(buildOptions);
};

if (require.main === module) {
  build();
}
