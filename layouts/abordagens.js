import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const Abordagens = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, } = frontmatter;

  return (
    <section className="section mt-16">
      <div className="container text-center">
        {image && (
          <div className="mb-8">
            <Image
              src={image}
              width={1298}
              height={616}
              alt={title}
              className="rounded-lg"
              priority={true}
            />
          </div>
        )}
        {markdownify(title, "h1", "h1 text-left lg:text-[55px] mt-12")}

        <div className="content text-left">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        <div className="row mt-24 text-left lg:flex-nowrap">
          <div className="lg:w-full ">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Abordagens;
