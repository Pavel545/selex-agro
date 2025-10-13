export function sanitizeHtml(html) {
if (!html) return "";
// убираем инлайновые стили и лишние атрибуты
let out = html
.replace(/\sstyle=\"[^\"]*\"/gi, "")
.replace(/\sclass=\"[^\"]*\"/gi, "")
.replace(/\swidth=\"[^\"]*\"/gi, "")
.replace(/\sheight=\"[^\"]*\"/gi, "")
.replace(/data-[a-z-]+=\"[^\"]*\"/gi, "")
.replace(/<!--[\s\S]*?-->/g, "")
.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "");


// разрешённый набор тегов
const allowed = ["h2","h3","h4","p","ul","ol","li","a","strong","em","img","br"];
out = out.replace(/<\/?([a-z0-9]+)([^>]*)>/gi, (m, tag, attrs) => {
tag = tag.toLowerCase();
if (!allowed.includes(tag)) return "";
// Разрешаем только href/src/alt у ссылок и картинок
if (tag === "a") {
const href = (attrs.match(/href=\"([^\"]*)\"/i) || [])[1] || "#";
return `<a href="${href}">`;
}
if (tag === "img") {
const src = (attrs.match(/src=\"([^\"]*)\"/i) || [])[1] || "";
const alt = (attrs.match(/alt=\"([^\"]*)\"/i) || [])[1] || "";
return src ? `<img src="${src}" alt="${alt}">` : "";
}
return `<${tag}>`;
});


return out;
}


export function htmlToPlain(html, maxLen = 220) {
const tmp = sanitizeHtml(html)
.replace(/<\/(p|li|h2|h3|h4)>/gi, "$1. ")
.replace(/<[^>]+>/g, " ")
.replace(/\s+/g, " ")
.trim();
return tmp.length > maxLen ? tmp.slice(0, maxLen - 1) + "…" : tmp;
}