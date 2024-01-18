import { useEffect, useState } from "react";
import MyLayout from "../theme/MyLayout";
import BlogPostGridItems from "../theme/BlogPostGridItems";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import DocItem from "../components/DocItem";

export default function Blogs() {
  const globalData = useGlobalData();

  const docs =
    globalData["docusaurus-plugin-content-docs"]["default"]["allDocs"];

  return (
    <MyLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Docs
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
        </div>
      </section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {docs.map(doc => <DocItem item={doc} key={doc.permalink}/>)}
      </div>
    </MyLayout>
  );
}
