export default function BookUrlFix (url: string) {
  const newUrl = url.replace("public", "").replace("jpg", "png")
  return newUrl
}