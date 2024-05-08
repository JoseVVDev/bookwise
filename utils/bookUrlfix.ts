export default function BookUrlFix (url: string) {
  const newUrl = url.replace("public", "")
  return newUrl
}