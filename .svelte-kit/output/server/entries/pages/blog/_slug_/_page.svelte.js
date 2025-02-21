import { h as head, p as pop, a as push } from "../../../../chunks/index.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const { title } = data;
  console.log(data);
  const PostContent = data.content;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
    $$payload2.out += `<meta property="og:type" content="article"> <meta property="og:title"${attr("content", title)}> <meta name="twitter:title"${attr("content", title)}>`;
  });
  $$payload.out += `<article class="post">${html(PostContent)}</article>`;
  pop();
}
export {
  _page as default
};
