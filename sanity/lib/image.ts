import createImageUrlBuilder from "@sanity/image-url";
import { getSanityConfigClient } from "../config/client";

const sanityClient = getSanityConfigClient();
const projectId = sanityClient?.config().projectId;
const dataset = sanityClient?.config().dataset;

const imageBuilder =
  projectId && dataset
    ? createImageUrlBuilder({
        projectId,
        dataset,
      })
    : null;

export const urlForImage = (source: any) => {
  if (!imageBuilder) {
    return {
      width: () => ({
        height: () => ({
          url: () => "",
        }),
      }),
    } as any;
  }
  return imageBuilder.image(source).auto("format").fit("max");
};
