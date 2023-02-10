import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { createClient } from '../prismicio';
import Button from '@/components/Button';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page }: PageProps) {
  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle('pagina_inicial');

  return {
    props: {
      page,
    },
  };
}
