import createImageUrlBuilder from "@sanity/image-url";
import { getSanityConfigClient } from "../config/client";

const sanityClient = getSanityConfigClient();
const imageBuilder =
  sanityClient && sanityClient.config().projectId && sanityClient.config().dataset
    ? createImageUrlBuilder({
        projectId: sanityClient.config().projectId,
        dataset: sanityClient.config().dataset,
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
