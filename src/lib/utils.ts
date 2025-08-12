import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as Images from "@/data/Image.ts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGalleryImages() {
	return Object.entries(Images).map(([name, url]) => ({
		src: url as string,
		alt: name.replace(/Image$/, "").replace(/([A-Z])/g, " $1").trim(), // e.g. "Construction Site"
	}));
}
