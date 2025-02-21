import "clsx";
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="flex justify-center"><div class="flex flex-col grow max-w-5xl py-12"><div class="px-8 text-gray-700 dark:text-gray-300"><div><div class="text-4xl font-semibold">Gianni <a class="text-xl font-medium" href="https://gio.blue">@ gio.blue</a></div> <span class="opacity-80 text-sm dark:text-gray-300">a.k.a. Gio — software dev living in Western Australia</span></div> `;
  children($$payload);
  $$payload.out += `<!----></div></div></div>`;
}
export {
  _layout as default
};
