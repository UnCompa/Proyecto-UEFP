// Importa las utilidades de `astro:content`
import { z, defineCollection } from "astro:content";

// Define un `type` y un `schema` para cada colección
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.string().regex(/^\d{4}\-\d{2}\-\d{2}$/), // Define el formato de fecha como 'yyyy/mm/dd'
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        avatar: z.string().optional(),
        icon: z.string().optional(),
        tags: z.array(z.string())
    })
});

// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
    dev: postsCollection,
    en: postsCollection,
}
