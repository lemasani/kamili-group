import {getGalleryImages} from '@/lib/utils.ts';
import {Gallery} from '@/components/Sections/Gallery.tsx';


export default function GalleryPage() {
	const images = getGalleryImages();
	
	return (
		<main className="container mx-auto py-10">
			<h1 className="text-3xl italic font-bold mb-6 text-secondary">Our Gallery</h1>
			<Gallery images={images} />
		</main>
	);
}
