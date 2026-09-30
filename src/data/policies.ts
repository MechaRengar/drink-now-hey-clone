import { PolicyContent } from "@/types";

export const POLICIES_DATA: Record<string, PolicyContent> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "July 1, 2026",
    html: `
      <div class="space-y-6 text-sm text-zinc-300 leading-relaxed">
        <p>This Privacy Policy describes how nowhey (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from drinknowhey.com or otherwise communicate with us regarding the Site.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Changes to This Privacy Policy</h3>
        <p>We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site with an updated "Last updated" date.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">How We Collect and Use Your Personal Information</h3>
        <p>To provide our services, we collect personal information about you from a variety of sources. This includes:</p>
        <ul class="list-disc pl-5 space-y-1.5 text-zinc-400">
          <li><strong>Contact details:</strong> your name, billing address, shipping address, phone number, and email.</li>
          <li><strong>Order information:</strong> items purchased, payment confirmation, and delivery details.</li>
          <li><strong>Account information:</strong> username, password, order history, and preferences.</li>
          <li><strong>Customer support communications:</strong> questions or feedback submitted to our support team.</li>
        </ul>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Data Security & Retention</h3>
        <p>We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, loss, or misuse. Payment transactions are processed securely via PCI-DSS compliant gateways.</p>
      </div>
    `
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    lastUpdated: "January 2026",
    html: `
      <div class="space-y-6 text-sm text-zinc-300 leading-relaxed">
        <p>This website is operated by nowhey. Throughout the site, the terms “we”, “us” and “our” refer to nowhey. nowhey offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Online Store Terms</h3>
        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Accuracy, Completeness and Timeliness of Information</h3>
        <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon as the sole basis for making decisions.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Modifications to the Service and Prices</h3>
        <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
      </div>
    `
  },
  "refund-policy": {
    slug: "refund-policy",
    title: "Refund Policy",
    lastUpdated: "January 2026",
    html: `
      <div class="space-y-6 text-sm text-zinc-300 leading-relaxed">
        <p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Eligibility for Returns</h3>
        <p>To be eligible for a return, your item must be in the same condition that you received it, undamaged, unopened with seals intact, and in its original packaging. You will also need the receipt or proof of purchase.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Damages and Issues</h3>
        <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged in transit, or if you receive the wrong item, so that we can evaluate the issue and make it right immediately.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Refunds</h3>
        <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days.</p>
      </div>
    `
  },
  "shipping-policy": {
    slug: "shipping-policy",
    title: "Shipping Policy",
    lastUpdated: "January 2026",
    html: `
      <div class="space-y-6 text-sm text-zinc-300 leading-relaxed">
        <h3 class="text-lg font-bold text-white uppercase font-mono">Despatch Time</h3>
        <p>We aim to dispatch orders same or next working day. Our usual cutoff time for same-day dispatch is 1:00pm GMT Monday to Friday. Orders placed over the weekend or on public holidays are dispatched on the next working day.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">UK Delivery Options</h3>
        <ul class="list-disc pl-5 space-y-2 text-zinc-400">
          <li><strong>Free Tracked Shipping:</strong> Free for all orders over £40.00. Delivered in 2-3 working days via Royal Mail / DPD.</li>
          <li><strong>Standard Tracked Shipping:</strong> £3.99 for orders under £40.00 (2-3 business days).</li>
          <li><strong>Express Next-Day Tracked:</strong> £5.99 (order before 1pm for delivery next working day).</li>
        </ul>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Tracking</h3>
        <p>All orders are dispatched with fully tracked delivery. You will receive an SMS and email tracking link as soon as your parcel is scanned into the courier depot.</p>
      </div>
    `
  },
  "subscription-policy": {
    slug: "subscription-policy",
    title: "Subscription & Cancellation Policy",
    lastUpdated: "January 2026",
    html: `
      <div class="space-y-6 text-sm text-zinc-300 leading-relaxed">
        <p>Some items in our store may be offered to you as a subscription (such as the 19% off Regular Refill). This policy explains how your subscription works and how you can manage or cancel it.</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Flexible & Hassle-Free</h3>
        <p>When you purchase a subscription, you receive 19% off your initial order and every recurring delivery thereafter. Deliveries occur at your chosen frequency (every 2, 3, or 4 weeks).</p>
        
        <h3 class="text-lg font-bold text-white uppercase font-mono mt-6">Cancel Anytime</h3>
        <p>There are zero contracts or commitments. You can pause, skip an upcoming delivery, change your flavour selection, or cancel your subscription at any time via your customer portal or by emailing support@drinknowhey.com at least 24 hours before your next renewal charge.</p>
      </div>
    `
  }
};

export function getPolicyBySlug(slug: string): PolicyContent | undefined {
  return POLICIES_DATA[slug];
}
