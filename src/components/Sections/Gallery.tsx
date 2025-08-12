import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryProps {
	images: { src: string; alt?: string }[];
}

export function Gallery({ images }: GalleryProps) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	
	return (
		<div className="w-full">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{images.map((img, idx) => (
					<Dialog key={idx} onOpenChange={(open) => !open && setSelectedImage(null)}>
						<DialogTrigger asChild>
							<div
								className={cn(
									"relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-sm hover:opacity-90 transition"
								)}
								onClick={() => setSelectedImage(img.src)}
							>
								<img
									src={img.src}
									alt={img.alt || `Gallery image ${idx + 1}`}
									className="object-cover w-full h-full"
								/>
							</div>
						</DialogTrigger>
						
						{selectedImage && (
							<DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none">
								<img
									src={selectedImage}
									alt={img.alt || "Large preview"}
									className="rounded-lg max-h-[90vh] mx-auto"
								/>
							</DialogContent>
						)}
					</Dialog>
				))}
			</div>
		</div>
	);
}
