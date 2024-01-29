import { EMPTY_COMPOSITION, RootComponentInstance } from "@uniformdev/canvas";
import { withUniformGetServerSideProps } from "@uniformdev/canvas-next/route";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import "../components/canvasComponents";
import Head from "next/head";

export const getServerSideProps = withUniformGetServerSideProps({
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
}: {
  data: RootComponentInstance;
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
      </main>
    </>
  );
}
