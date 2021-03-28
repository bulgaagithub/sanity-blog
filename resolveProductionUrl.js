export default function resolveProductionUrl(document) {
  return `${process.env.SANITY_STUDIO_PROJECT_URL}/api/preview?secret=${process.env.SANITY_STUDIO_PROJECT_PASSWORD}&slug=${document.slug.current}`;
}
