async function getReadMeContent(contentUrl: string) {
  const res = await fetch(`${contentUrl}/README.md`);
  const markdown = await res.text();
  const mdWithoutFirstLine = removeLine1(markdown);
  const mdWithAbsoluteImgs = fixRelativeImgs(contentUrl, mdWithoutFirstLine);
  return mdWithAbsoluteImgs;
}

function fixRelativeImgs(contentUrl: string, text: string) {
  return text.replaceAll(/(<img src=")(.*?")/g, `$1${contentUrl}/$2`);
}

function removeLine1(text: string) {
  const lines = text.split("\n");
  lines.splice(0, 1);
  return lines.join("\n");
}

export default getReadMeContent;
