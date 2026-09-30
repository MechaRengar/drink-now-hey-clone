import { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "why-clear-protein-is-replacing-milky-shakes",
    title: "why clear protein is replacing milky shakes for good",
    date: "February 24, 2026",
    author: "nowhey team",
    excerpt: "from bloating and foul shaker smells to heavy artificial sweeteners, traditional whey shakes had their moment. here is why cold clear protein water is dominating 2026.",
    image: "/images/desktopslideshowhero.jpg",
    content: `
      <div class="space-y-6 text-sm text-zinc-300 leading-relaxed">
        <p>if you’ve ever opened your gym bag on a warm day only to be greeted by the nauseating stench of an unwashed shaker bottle, you already know the problem.</p>
        <p>for over twenty years, athletes have tolerated milky, clumpy, overly-sweetened protein powders simply because they were the only convenient way to hit 20-30g of protein post-workout. but the digestive discomfort, bloating, and heavy feeling were always a frustrating compromise.</p>
        <h3 class="text-xl font-bold uppercase font-mono text-white mt-8 mb-4">the shift to clear protein peptides</h3>
        <p>thanks to breakthroughs in protein peptide isolation, clear protein drinks now provide the exact same high-leucine, muscle-rebuilding amino acid profile without a single drop of dairy fat or lactose. our formulated pea protein peptides dissolve completely, creating a drink that is literally as clear and light as water.</p>
        <h3 class="text-xl font-bold uppercase font-mono text-white mt-8 mb-4">instant hydration meets zero sugar</h3>
        <p>after a brutal lifting session or a 10k tempo run, the last thing your body craves is a thick milkshake. your body wants cold, crisp hydration. by infusing natural fruit notes like crisp berry and juicy mango into 20g of pure protein at just 86 calories, nowhey turns your post-workout drink into an instant reward.</p>
      </div>
    `
  },
  {
    id: "2",
    slug: "the-science-of-the-calorie-deficit-cheat-code",
    title: "the science behind the calorie deficit cheat code",
    date: "January 15, 2026",
    author: "nowhey science",
    excerpt: "20 grams of bioavailable protein with only 86 total calories. discover the macronutrient ratio that helps preserve lean muscle while shedding fat.",
    image: "/images/Berry_Front.png",
    content: `
      <div class="space-y-6 text-sm text-zinc-300 leading-relaxed">
        <p>during a fat loss phase, hitting your protein target while staying within a strict caloric deficit is often the hardest math problem of the day.</p>
        <p>most ready-to-drink shakes pack between 160 and 240 calories to deliver 20-25g of protein, loaded with gums, oils, and hidden carbs. nowhey strips away all filler: 20g of protein contains exactly 80 pure calories of amino acid energy, leaving only 6 calories from natural fruit essence.</p>
        <h3 class="text-xl font-bold uppercase font-mono text-white mt-8 mb-4">satiety without sluggishness</h3>
        <p>high protein intake stimulates peptide YY and GLP-1 release, helping you stay full between meals while sparing precious muscle tissue during calorie restriction.</p>
      </div>
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
