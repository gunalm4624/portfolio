import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: Image) {
  return builder.image(source).width(800).height(600).fit("crop").url();
}

export function urlForImageFit(source: Image) {
  return builder.image(source).width(1600).fit("max").url();
}
