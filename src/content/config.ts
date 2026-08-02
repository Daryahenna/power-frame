import { defineCollection, z } from 'astro:content';

const models = defineCollection({
  type: 'data',
  schema: z.object({
    make: z.enum(['ssangyong', 'kia']),
    brandLabel: z.string(),
    modelSlug: z.string(),
    modelName: z.string(),
    // мета и заголовки
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    subtitle: z.string(),
    priceFrom: z.string(),
    // блок "боль" — если factsVerified=false, на странице покажем плашку TODO
    painText: z.string(),
    painQuote: z.string().optional(),
    factsVerified: z.boolean().default(false),
    // работы по модели
    works: z.array(z.string()),
    // поколения
    generations: z
      .array(
        z.object({
          name: z.string(),
          years: z.string(),
          notes: z.string(),
        })
      )
      .default([]),
    // кейсы — на старте всегда плейсхолдеры
    cases: z
      .array(
        z.object({
          title: z.string(),
          diagnosis: z.string(),
          work: z.string(),
          duration: z.string(),
          price: z.string(),
          isPlaceholder: z.boolean().default(true),
        })
      )
      .default([]),
    // прайс по модели
    priceTable: z.array(
      z.object({
        service: z.string(),
        priceFrom: z.string(),
      })
    ),
    // FAQ
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
    // ключевые фразы из семантики (файл 4) — для внутренней сверки, не рендерятся as-is
    keywords: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { models, blog };
