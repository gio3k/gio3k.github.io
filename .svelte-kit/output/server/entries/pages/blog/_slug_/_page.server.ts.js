import "clsx";
import { r as render } from "../../../../chunks/index.js";
import { parseHTML } from "linkedom";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const metadata = {
  "title": "hello from the title",
  "created_at": "20-02-2025",
  "tags": ["gamedev", "csharp", "code"]
};
const { title, created_at, tags } = metadata;
function Test_md($$payload) {
  $$payload.out += `<p>hi hi hi hi</p>`;
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
async function getRenderedBlogEntryForComponent(slug, component) {
  const renderOutput = render(component.default);
  let renderedBlogEntry = {
    contentPreview: "",
    coverImageUrl: ""
  };
  const { window, document, HTMLElement } = parseHTML(renderOutput.body);
  {
    const collection = document.getElementsByTagName("img");
    if (collection.length != 0) {
      const img = collection[0];
      renderedBlogEntry.coverImageUrl = img.src;
    }
  }
  {
    const PREVIEW_MAX_SIZE = 128;
    const documentText = document.documentElement.innerText;
    renderedBlogEntry.contentPreview = documentText.substring(0, PREVIEW_MAX_SIZE);
  }
  return {
    slug,
    content: renderOutput.body,
    ...renderedBlogEntry,
    ...component.metadata
  };
}
async function getAllRenderedBlogEntries() {
  const result = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/blog/entries/test.md": __vite_glob_0_0 });
  for (const path in paths) {
    const component = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (!(component && typeof component === "object" && "metadata" in component && slug)) {
      continue;
    }
    result.push(await getRenderedBlogEntryForComponent(slug, component));
  }
  return result;
}
async function getRenderedBlogEntryWithContentForSlug(slug) {
  return getRenderedBlogEntryForComponent(
    slug,
    await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../blog/entries/test.md": () => Promise.resolve().then(() => __vite_glob_0_0) }), `../../../blog/entries/${slug}.md`, 6)
  );
}
const entries = async () => {
  const result = [];
  for (const i of await getAllRenderedBlogEntries()) {
    result.push({
      slug: i.slug
    });
  }
  return result;
};
const load = async ({ params }) => {
  const { slug } = params;
  return getRenderedBlogEntryWithContentForSlug(slug);
};
const prerender = true;
export {
  entries,
  load,
  prerender
};
