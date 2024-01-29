import { createPreviewHandler } from "@uniformdev/canvas-next";
import { NextApiHandler } from "next";

const appBasePaths = ["/app-orange", "/app-purple"];

const uniformPreviewHandler = createPreviewHandler({
  secret: () => process.env.UNIFORM_PREVIEW_SECRET as string,
});

const handler: NextApiHandler = (req, res) => {
  const pathToPreview = (req.query.path ?? "") as string;

  const appBasePath = appBasePaths.find((basePath) =>
    pathToPreview.startsWith(basePath)
  );

  if (appBasePath) {
    const appSpecificPreviewUrl = `${appBasePath}${req.url}`;

    res.redirect(appSpecificPreviewUrl);
    return;
  }

  return uniformPreviewHandler(req, res);
};

export default handler;
