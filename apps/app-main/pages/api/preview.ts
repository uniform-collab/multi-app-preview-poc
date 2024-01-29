import { createPreviewHandler } from "@uniformdev/canvas-next";

// const appBasePaths = ["/app-orange", "/app-purple"];

const handler = createPreviewHandler({
  secret: () => process.env.UNIFORM_PREVIEW_SECRET as string,
  // resolveFullPath: ({ path, locale }) => {
  //   const appPath = appBasePaths.find((basePath) => path?.startsWith(basePath));

  //   if (appPath) {
  //     const secret = process.env.UNIFORM_PREVIEW_SECRET;

  //     return `${appPath}/api/preview?secret=${secret}&path=${appPath}&locale=${
  //       locale ?? ""
  //     }`;
  //   }

  //   return path;
  // },
});

export default handler;
