import createImageUrlBuilder from "@sanity/image-url";
import { client } from "../config/client";

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto("format").fit("max");
