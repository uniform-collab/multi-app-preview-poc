import { EMPTY_COMPOSITION, RootComponentInstance } from "@uniformdev/canvas";
import { withUniformGetServerSideProps } from "@uniformdev/canvas-next/route";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import "../components/canvasComponents";
import Head from "next/head";

export const getServerSideProps = withUniformGetServerSideProps({
  modifyPath: (path) => {
    return `/app-purple${path}`;
  },
  handleNotFound: (result, context) => {
    return {
      props: {
        data: EMPTY_COMPOSITION,
        previewDAta: context.previewData,
      },
    } as any;
  },
});

export default function Page({
  data: composition,
  previewData,
}: {
  data: RootComponentInstance;
  previewData: any;
}) {
  return (
    <>
      <Head>
        <title>{composition._name}</title>
      </Head>
      <main className="text-orange">
        <UniformComposition data={composition}>
          <UniformSlot name="content" />
        </UniformComposition>
        previewData: <pre>{JSON.stringify(previewData)}</pre>
      </main>
    </>
  );
}
