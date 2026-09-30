import { PageContent } from "@/types";

export const PAGES_DATA: Record<string, PageContent> = {
  "about-nowhey": {
    slug: "about-nowhey",
    title: "about nowhey",
    subtitle: "we're committed to making healthy choices easy, enjoyable, and accessible for everyone.",
    html: `
      <div class="space-y-8">
        <p class="text-lg leading-relaxed text-zinc-300">
          our mission is to provide a protein solution that not only supports your fitness goals, but also fits effortlessly into your active lifestyle. we believe wellness shouldn't feel like a chore or a compromise.
        </p>

        <div class="border-l-2 border-[#c6f91f] pl-6 my-8">
          <h2 class="text-2xl font-bold uppercase tracking-tight text-white font-mono">
            nowhey is more than a product; it's a commitment to helping you live a healthier, happier life with a protein supplement that fits your lifestyle and tastes as good as it feels.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="p-6 bg-[#161616] rounded-2xl border border-white/10">
            <h3 class="text-xl font-bold text-white mb-2 uppercase font-mono">the problem</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">
              for too long, getting sufficient daily protein has meant drinking thick, chalky dairy shakes or choking down artificial-tasting bars. traditional protein shakes are heavy, cause bloating, and require cumbersome shakers that spoil quickly.
            </p>
          </div>
          <div class="p-6 bg-[#161616] rounded-2xl border border-white/10">
            <h3 class="text-xl font-bold text-[#c6f91f] mb-2 uppercase font-mono">the nowhey solution</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">
              we engineered clear, refreshing fruit-flavoured protein water. with 20g of pure bioavailable plant protein, 86 calories and zero sugar, nowhey drinks just like an ice-cold fruit squash—light, refreshing, and clean.
            </p>
          </div>
        </div>

        <h3 class="text-2xl font-bold uppercase tracking-tight text-white font-mono mt-12 mb-4">
          our quality promise
        </h3>
        <p class="text-zinc-400 leading-relaxed text-sm">
          we use only premium pea protein peptides that undergo an advanced hydrolysation process to remove all pea taste and texture. the result is a crystal-clear, refreshing drink with a complete amino acid profile, optimal PDCAAS score, and zero dairy allergens.
        </p>
      </div>
    `
  },
  "contact": {
    slug: "contact",
    title: "get in touch",
    subtitle: "we aim to respond within 12 hours.",
    html: `
      <div class="space-y-6">
        <p class="text-zinc-300 text-sm">
          have questions about an order, delivery, wholesale enquiry, or our flavours? fill out the form or reach out directly to our team.
        </p>
        <div class="p-6 bg-[#161616] rounded-2xl border border-white/10 space-y-3 text-sm">
          <p class="text-zinc-400"><strong class="text-white">Customer Support:</strong> support@drinknowhey.com</p>
          <p class="text-zinc-400"><strong class="text-white">Wholesale Enquiries:</strong> b2b@drinknowhey.com</p>
          <p class="text-zinc-400"><strong class="text-white">Head Office:</strong> nowhey Ltd, London, United Kingdom</p>
          <p class="text-zinc-400"><strong class="text-white">Working Hours:</strong> Monday – Friday, 9:00am – 6:00pm GMT</p>
        </div>
      </div>
    `
  },
  "b2b": {
    slug: "b2b",
    title: "stock nowhey in your business",
    subtitle: "the fastest-growing plant-based clear protein water in the UK.",
    html: `
      <div class="space-y-10">
        <p class="text-base text-zinc-300 leading-relaxed">
          whether you run premier fitness clubs, modern convenience stores, universities, or corporate campuses, nowhey delivers unbeatable margins and high inventory turns.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10 space-y-3">
            <span class="text-xs font-bold text-[#c6f91f] uppercase tracking-wider">01. Retail & Grocery</span>
            <h3 class="text-lg font-bold text-white uppercase font-mono">Meal Deals & Grab-and-Go</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Eye-catching 330ml sleek can packaging designed for high shelf appeal in chillers. 100% allergen-free.
            </p>
          </div>
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10 space-y-3">
            <span class="text-xs font-bold text-[#c6f91f] uppercase tracking-wider">02. Gyms & Studios</span>
            <h3 class="text-lg font-bold text-white uppercase font-mono">Immediate Recovery</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Fast-moving impulse purchases for members wanting 20g protein without dairy bloat or protein shakers.
            </p>
          </div>
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10 space-y-3">
            <span class="text-xs font-bold text-[#c6f91f] uppercase tracking-wider">03. Vending & Travel</span>
            <h3 class="text-lg font-bold text-white uppercase font-mono">Standard 330ml Format</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Compatible with spiral and robotic vending machines. Compliant with UK healthy snack guidelines.
            </p>
          </div>
        </div>

        <div class="bg-[#161616] p-8 rounded-3xl border border-white/10 text-center">
          <h3 class="text-xl font-bold uppercase font-mono text-white mb-2">Authorized UK Distributors</h3>
          <p class="text-xs text-zinc-400 mb-6">Order directly through our wholesale partners or request trade accounts</p>
          <div class="flex flex-wrap justify-center items-center gap-8">
            <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white">Tropicana Wholesale</span>
            <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white">Protein Bargain Wholesale</span>
            <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white">Occa Wholesale</span>
          </div>
        </div>
      </div>
    `
  },
  "ambassadors": {
    slug: "ambassadors",
    title: "ambassador programme",
    subtitle: "join the nowhey athlete & creator movement.",
    html: `
      <div class="space-y-8">
        <p class="text-base text-zinc-300 leading-relaxed">
          nowhey is a ready-to-drink clear protein beverage, with 20g protein, ~82 calories and zero sugar. perfect for building lean muscle and keeping calories down, and easy to digest.
        </p>
        <p class="text-sm text-zinc-400 leading-relaxed">
          we're looking for athletes, hyrox racers, runners, coaches, and fitness influencers to help us build our social media presence. ambassadors will receive a personal discount code and earn commission on sales they generate.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10">
            <span class="text-3xl font-black text-[#c6f91f] font-mono">15%</span>
            <h4 class="text-sm font-bold text-white uppercase mt-2">Commission</h4>
            <p class="text-xs text-zinc-400 mt-1">Earn on every order generated through your custom referral link.</p>
          </div>
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10">
            <span class="text-3xl font-black text-[#c6f91f] font-mono">Free</span>
            <h4 class="text-sm font-bold text-white uppercase mt-2">Monthly Drops</h4>
            <p class="text-xs text-zinc-400 mt-1">Receive complimentary mixed bundles to fuel your workouts and content.</p>
          </div>
          <div class="bg-[#181818] p-6 rounded-2xl border border-white/10">
            <span class="text-3xl font-black text-[#c6f91f] font-mono">VIP</span>
            <h4 class="text-sm font-bold text-white uppercase mt-2">Event Access</h4>
            <p class="text-xs text-zinc-400 mt-1">Free entries to Hyrox races, athlete meetups, and fitness festivals.</p>
          </div>
        </div>
      </div>
    `
  },
  "sustainability": {
    slug: "sustainability",
    title: "sustainability & recycling",
    subtitle: "we believe sustainability starts with transparency.",
    html: `
      <div class="space-y-8 text-zinc-300 text-sm leading-relaxed">
        <p class="text-base text-white">
          every choice we make, from materials to filling to shipping, is made with impact in mind.
        </p>
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white uppercase font-mono">100% Infinitely Recyclable Aluminium</h3>
          <p>
            unlike single-use plastic bottles which degrade with each recycling loop, aluminium cans are infinitely recyclable without loss of quality. roughly 75% of all aluminium ever produced is still in productive use today.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white uppercase font-mono">Plant-Based Pea Peptides</h3>
          <p>
            peas are nitrogen-fixing crops that enrich agricultural soil, requiring significantly less freshwater, land area, and carbon emissions compared to traditional dairy whey farming.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white uppercase font-mono">Plastic-Free Delivery</h3>
          <p>
            all our outer transit boxes are made from FSC-certified recycled cardboard and sealed with water-activated paper tape, ensuring zero plastic waste reaches your doorstep.
          </p>
        </div>
      </div>
    `
  },
  "notarunclub": {
    slug: "notarunclub",
    title: "#notarunclub",
    subtitle: "community runs, social fitness, and cold protein water.",
    html: `
      <div class="space-y-6 text-center max-w-xl mx-auto py-8">
        <p class="text-base text-zinc-300">
          no timing chips, no pressure. just real people getting outdoors, moving, and connecting over cold nowhey drinks.
        </p>
        <div class="p-8 bg-[#181818] rounded-3xl border border-white/10 space-y-4">
          <h3 class="text-2xl font-bold uppercase font-mono text-white">join the whatsapp community</h3>
          <p class="text-xs text-zinc-400">
            get weekly route updates, track locations, and meet fellow runners across London, Manchester, and Birmingham.
          </p>
          <a
            href="https://chat.whatsapp.com/FoBe3rW8Bi26H9tvHm8nZD"
            target="_blank"
            rel="noreferrer"
            class="inline-block px-8 py-3.5 bg-[#c6f91f] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#b0df1b] transition-all"
          >
            Join WhatsApp Group
          </a>
        </div>
      </div>
    `
  },
  "become-a-stockist-g2sm": {
    slug: "become-a-stockist-g2sm",
    title: "become a stockist",
    subtitle: "stock nowhey cans in your gym, shop, or café.",
    html: `
      <div class="space-y-6">
        <p class="text-sm text-zinc-300">
          available through leading sports nutrition wholesalers across the UK:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-sm text-zinc-400">
          <li><strong class="text-white">Protein Bargain Wholesale:</strong> Full 12-pack and mixed bundle inventory</li>
          <li><strong class="text-white">Tropicana Wholesale:</strong> Next-day pallet & case deliveries</li>
          <li><strong class="text-white">Occa Store Wholesale:</strong> Dedicated fitness retailer support</li>
        </ul>
        <div class="mt-8">
          <a href="/pages/contact" class="px-6 py-3 bg-[#c6f91f] text-black font-bold text-xs uppercase tracking-wider rounded-full inline-block">
            Contact Trade Team
          </a>
        </div>
      </div>
    `
  },
  "giveaway-terms": {
    slug: "giveaway-terms",
    title: "giveaway terms & conditions",
    subtitle: "official competition rules and conditions.",
    html: `
      <div class="space-y-4 text-xs text-zinc-400 leading-relaxed">
        <p>1. This competition runs only on Instagram. Instagram is not affiliated with or endorsing this giveaway.</p>
        <p>2. No purchase is necessary to enter this competition.</p>
        <p>3. The winner will be selected at random from all valid entries received before the closing date.</p>
        <p>4. Entrants must be aged 18 or over and resident in the United Kingdom.</p>
        <p>5. Prizes are non-transferable, non-negotiable and cannot be exchanged for cash.</p>
      </div>
    `
  },
  "news": {
    slug: "news",
    title: "news & press",
    subtitle: "the latest announcements from the nowhey team.",
    html: `
      <div class="space-y-6">
        <p class="text-sm text-zinc-400">
          stay updated with our product drops, distributor expansions, athlete sponsorships, and event appearances.
        </p>
        <div class="p-6 bg-[#161616] rounded-2xl border border-white/10 space-y-2">
          <span class="text-[10px] text-[#c6f91f] font-bold uppercase tracking-wider">Announcement</span>
          <h3 class="text-lg font-bold text-white font-mono uppercase">nowhey expands wholesale distribution to over 300 gyms</h3>
          <p class="text-xs text-zinc-400">
            partnering with leading leisure operators across London, Manchester, and Leeds to bring clean protein to athletes everywhere.
          </p>
        </div>
      </div>
    `
  },
  "policies": {
    slug: "policies",
    title: "customer policies",
    subtitle: "our legal terms, privacy policies, and guarantees.",
    html: `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="/policies/privacy-policy" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Privacy Policy →</h3>
          <p class="text-xs text-zinc-400 mt-2">How we handle and protect your personal information.</p>
        </a>
        <a href="/policies/terms-of-service" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Terms of Service →</h3>
          <p class="text-xs text-zinc-400 mt-2">Rules governing use of our website and services.</p>
        </a>
        <a href="/policies/refund-policy" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Refund Policy →</h3>
          <p class="text-xs text-zinc-400 mt-2">Our 30-day returns and satisfaction policy.</p>
        </a>
        <a href="/policies/shipping-policy" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Shipping Policy →</h3>
          <p class="text-xs text-zinc-400 mt-2">UK delivery times, couriers, and tracking details.</p>
        </a>
        <a href="/policies/subscription-policy" class="p-6 bg-[#161616] rounded-2xl border border-white/10 hover:border-[#c6f91f] transition-colors block">
          <h3 class="text-base font-bold text-white font-mono uppercase">Subscription Policy →</h3>
          <p class="text-xs text-zinc-400 mt-2">How to manage, pause, or cancel recurring deliveries.</p>
        </a>
      </div>
    `
  }
};

export function getPageBySlug(slug: string): PageContent | undefined {
  return PAGES_DATA[slug];
}
