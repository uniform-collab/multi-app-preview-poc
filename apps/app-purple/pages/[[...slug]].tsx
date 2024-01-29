import { RootComponentInstance } from "@uniformdev/canvas";
import { withUniformGetServerSideProps } from "@uniformdev/canvas-next/project-map";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import "../components/canvasComponents";
import Head from "next/head";

export const getServerSideProps = withUniformGetServerSideProps({
  modifyPath: (path) => `/app-purple${path}`,
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
