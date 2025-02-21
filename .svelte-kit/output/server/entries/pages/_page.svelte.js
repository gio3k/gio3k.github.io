import "clsx";
import { s as stringify } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function LinkButton($$payload, $$props) {
  let {
    "service-title": serviceTitle,
    "service-id": serviceId,
    "service-url": serviceUrl,
    "user-title": userTitle = null,
    children = null
  } = $$props;
  $$payload.out += `<div${attr("class", `service service-${stringify(serviceId)} flex flex-row svelte-ka6d52`)}><div class="button-outer p-2 rounded-2xl mr-3 svelte-ka6d52" role="button" tabindex="0"><div class="button-icon size-8 svelte-ka6d52"></div></div> <div class="flex flex-col mt-0.5"><div class="flex flex-row items-center"><span class="title-service font-semibold select-none">${escape_html(serviceTitle)}</span> <span class="title-user ml-1.5 mt-[0.1rem] font-mono svelte-ka6d52">${escape_html(userTitle)}</span></div> <span class="text-sm content">`;
  children?.($$payload);
  $$payload.out += `<!----></span></div></div>`;
}
function SmallHeading($$payload, $$props) {
  let { children = null } = $$props;
  $$payload.out += `<div class="font-semibold uppercase text-gray-300/80">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
function Section($$payload, $$props) {
  let { children = null } = $$props;
  $$payload.out += `<div class="flex flex-col flex-wrap grow py-5 px-6 rounded-xl bg-blue-900/20">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
function BlogPostPreview($$payload, $$props) {
  let { children = null } = $$props;
  $$payload.out += `<div class="flex flex-row items-center"><div class="border-gray-600/40"><div class="font-semibold text-2xl">macOS Keyboard Emulation with C#</div> <div class="font-semibold text-gray-600 text-sm mb-0.5"><span>JANUARY 18 2025</span> <span>— GAMEDEV, CODE, C#</span></div> <span class="font-normal text-sm">By using the CoreGraphics API in macOS, a developer can emulate a key press without
							any physical interaction. Doing that is fairly simple in Objective-C or C++, but how
							can we do the same in C#?</span> <span class="font-semibold text-gray-500 text-sm">[read more]</span></div></div>`;
}
function _page($$payload) {
  $$payload.out += `<div class="mt-4 flex flex-col gap-8">`;
  Section($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex flex-col gap-5">`;
      LinkButton($$payload2, {
        "service-title": "Email",
        "service-id": "mail",
        "service-url": "mailto:me@gio.blue",
        "user-title": "me@gio.blue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Send me an email`;
        }
      });
      $$payload2.out += `<!----> `;
      LinkButton($$payload2, {
        "service-title": "GitHub",
        "service-id": "github",
        "service-url": "https://github.com/gio3k",
        "user-title": "@gio3k",
        children: ($$payload3) => {
          $$payload3.out += `<!---->See my personal projects`;
        }
      });
      $$payload2.out += `<!----></div>`;
    }
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="mb-2">`;
      SmallHeading($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Blog Posts`;
        }
      });
      $$payload2.out += `<!----></div> <div class="flex flex-col gap-10">`;
      BlogPostPreview($$payload2, {});
      $$payload2.out += `<!----> `;
      BlogPostPreview($$payload2, {});
      $$payload2.out += `<!----> `;
      BlogPostPreview($$payload2, {});
      $$payload2.out += `<!----> `;
      BlogPostPreview($$payload2, {});
      $$payload2.out += `<!----></div>`;
    }
  });
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
