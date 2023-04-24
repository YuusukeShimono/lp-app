import { client } from "@/libs/client";

const NewsId = (props: any) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  const ids = data.contents.map((content) => `/news/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps = async (ctx: any) => {
  const data = await client.getListDetail({
    endpoint: "blogs",
    contentId: ctx.params.id,
  });
  return {
    props: data,
  };
};

export default NewsId;
