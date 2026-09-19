import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/leaflife-coconut-hero.jpg.asset.json";
import freshCoconutsAsset from "@/assets/fresh-coconuts.jpg.asset.json";
import copraAsset from "@/assets/copra.jpg.asset.json";
import cocopeat2kg from "@/assets/cocopeat-2kg-matched.jpg";
import cocopeat5kgAsset from "@/assets/cocopeat-5kg.jpg.asset.json";
import firewoodAsset from "@/assets/firewood.jpg.asset.json";
import allAgroProductsAsset from "@/assets/all-agro-products.jpg.asset.json";
import logo from "@/assets/leaflife-logo-transparent.png";
import grove from "@/assets/pollachi-grove.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leaflife Agro — Premium Agricultural Products" },
      { name: "description", content: "Bulk coconut, copra, cocopeat and agricultural supply from Tamil Nadu for domestic buyers and global importers." },
      { property: "og:title", content: "Leaflife Agro — Premium Agricultural Products" },
      { property: "og:description", content: "Reliable bulk agricultural sourcing from Pollachi, Coimbatore and Kangayam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Fresh Coconuts",
    origin: "Pollachi origin",
    image: freshCoconutsAsset.url,
    tagline: "Hand-graded coconuts from the Pollachi belt.",
    body: "Fresh coconuts sourced directly from growers in the Pollachi coconut belt and dispatched in clean, uniform batches. We coordinate plucking, grading and loading so wholesalers and exporters receive consistent size, maturity and husk condition, lot after lot.",
    uses: ["Wholesale markets", "Retail supply", "Export consignments", "Coconut processors"],
    specs: [
      { label: "Maturity", value: "Tender or mature" },
      { label: "Grading", value: "By size at source" },
      { label: "Packing", value: "Gunny bags or loose" },
      { label: "Supply", value: "Recurring weekly lots" },
    ],
  },
  {
    name: "Pollachi Copra",
    origin: "Kangayam quality",
    image: copraAsset.url,
    tagline: "Sun-dried copra cleaned before dispatch.",
    body: "Copra collected through the Kangayam trading hub, sorted and cleaned before it leaves the yard. Suitable for oil mills and commercial processors that need dependable quality and predictable volumes through the season.",
    uses: ["Oil extraction", "Edible oil mills", "Commercial processors", "Wholesale trading"],
    specs: [
      { label: "Grade", value: "Milling & edible" },
      { label: "Sorting", value: "Hand-cleaned at source" },
      { label: "Packing", value: "Jute bags or bulk" },
      { label: "Supply", value: "Truck & container loads" },
    ],
  },
  {
    name: "Cocopeat Blocks — 2 kg",
    origin: "Export ready",
    image: cocopeat2kg,
    tagline: "Compact blocks for nurseries and growing media.",
    body: "Compressed 2 kg cocopeat blocks made from coconut husk pith, ideal where smaller, easy-to-handle packs suit the workflow. Popular with nurseries and growers blending their own potting mix, and available in quantities that match your production cycle.",
    uses: ["Nursery trays", "Potting mix", "Hydroponic media", "Terrace gardening"],
    specs: [
      { label: "Weight", value: "2 kg compressed" },
      { label: "Form", value: "Washed or unwashed" },
      { label: "Packing", value: "Shrink-wrapped blocks" },
      { label: "Supply", value: "Palletised on request" },
    ],
  },
  {
    name: "Cocopeat Blocks — 5 kg",
    origin: "Export ready",
    image: cocopeat5kgAsset.url,
    tagline: "High-density blocks for commercial cultivation.",
    body: "Denser 5 kg blocks built for commercial growers and export consignments where handling efficiency matters. The compressed format saves container space and rehydrates quickly into a light, moisture-retentive growing medium.",
    uses: ["Commercial cultivation", "Greenhouse beds", "Container nurseries", "Export consignments"],
    specs: [
      { label: "Weight", value: "5 kg compressed" },
      { label: "Form", value: "Washed or unwashed" },
      { label: "Packing", value: "Shrink-wrapped blocks" },
      { label: "Supply", value: "Palletised on request" },
    ],
  },
  {
    name: "Firewood",
    origin: "Domestic supply",
    image: firewoodAsset.url,
    tagline: "Dependable bulk firewood for commercial users.",
    body: "Bulk firewood arranged for commercial and industrial buyers across India, with collection and loading handled so deliveries stay on schedule. We work to the length, dryness and tonnage your operation actually burns.",
    uses: ["Industrial boilers", "Bakeries & kilns", "Hospitality", "Commercial heating"],
    specs: [
      { label: "Form", value: "Logs or split" },
      { label: "Grading", value: "By length at source" },
      { label: "Packing", value: "Loose or bundled" },
      { label: "Supply", value: "Domestic bulk only" },
    ],
  },
  {
    name: "All Other Agro Products",
    origin: "Custom sourcing",
    image: allAgroProductsAsset.url,
    tagline: "Spices and beyond, sourced to your specification.",
    body: "If it grows in Tamil Nadu, we can help you buy it. From spices and pulses to seasonal field crops, we source against your specification, arrange quality checks and consolidate consignments for both domestic buyers and overseas importers.",
    uses: ["Spices & masala trade", "Pulses & grains", "Seasonal field crops", "Buying-house supply"],
    specs: [
      { label: "Range", value: "Spices, grains & more" },
      { label: "Grading", value: "Buyer specification" },
      { label: "Packing", value: "Export standard" },
      { label: "Supply", value: "Domestic & export bulk" },
    ],
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-primary">
        <img src={heroAsset.url} alt="Coconuts growing on a palm tree" className="absolute inset-0 size-full animate-scale-in object-cover object-center" />
        <div className="absolute inset-0 bg-primary/55" />
        <header className="absolute inset-x-0 top-0 z-20 border-b border-primary-foreground/20 px-5 py-5 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="#home" className="flex items-center" aria-label="Leaflife Agro home"><img src={logo} alt="LeafLife Organics" className="h-16 w-auto object-contain md:h-20" /></a>
            <nav className="hidden items-center gap-9 text-sm font-medium uppercase text-primary-foreground md:flex">
              <a href="#catalogue" className="transition-colors hover:text-accent">Products</a>
              <a href="#origin" className="transition-colors hover:text-accent">Origin</a>
              <a href="#markets" className="transition-colors hover:text-accent">Markets</a>
              <a href="#quote" className="transition-colors hover:text-accent">Get a quote</a>
            </nav>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center text-primary-foreground md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
          {menuOpen && <nav className="mx-auto mt-5 flex max-w-7xl flex-col gap-4 border-t border-primary-foreground/20 pt-5 text-sm font-medium uppercase text-primary-foreground md:hidden"><a href="#catalogue" onClick={() => setMenuOpen(false)}>Products</a><a href="#origin" onClick={() => setMenuOpen(false)}>Origin</a><a href="#markets" onClick={() => setMenuOpen(false)}>Markets</a><a href="#quote" onClick={() => setMenuOpen(false)}>Get a quote</a></nav>}
        </header>
        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
          <p className="mb-4 animate-reveal text-sm font-medium uppercase text-accent">Tamil Nadu · India</p>
          <h1 className="animate-reveal font-display text-6xl leading-[1.1] text-primary-foreground md:text-8xl lg:text-9xl">Leaflife Agro</h1>
          <p className="mt-7 max-w-2xl animate-reveal text-lg font-light leading-relaxed text-primary-foreground/85 md:text-xl">Premium agricultural commodities sourced from the heart of Pollachi for buyers across India and worldwide.</p>
          <Button asChild size="lg" className="mt-10 animate-reveal"><a href="#quote">Request a quote <ArrowRight className="ml-3 size-4" /></a></Button>
        </div>
        <a href="#catalogue" aria-label="View products" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-accent"><ArrowDown className="size-7 animate-bounce" /></a>
      </section>

      <section id="catalogue" className="mx-auto max-w-7xl px-5 py-20 md:px-12 md:py-28">
        <div className="mb-14 flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase text-accent">Product catalogue</p><h2 className="font-display text-5xl italic leading-[1.12] md:text-6xl">The Product Ledger</h2></div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Reliable bulk sourcing, flexible quantities, and professional support for domestic and international buyers.</p>
        </div>
        <div className="grid border-l border-t border-border md:grid-cols-2">
          {products.map((product, index) => (
            <article key={product.name} className="group flex flex-col border-b border-r border-border">
              <div className="relative overflow-hidden bg-muted">
                <img src={product.image} alt={product.name} loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]" />
                <span className="absolute left-0 top-0 bg-background/90 px-4 py-2 font-display text-xl italic">{String(index + 1).padStart(2, "0")}</span>
                <span className="absolute bottom-0 right-0 bg-accent px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">{product.origin}</span>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="font-display text-4xl leading-tight md:text-[2.6rem]">{product.name}</h3>
                <p className="mt-3 font-display text-lg italic text-secondary-foreground">{product.tagline}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{product.body}</p>
                <div className="mt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">Best suited for</p>
                  <ul className="mt-3 flex flex-wrap gap-2">{product.uses.map((use) => <li key={use} className="border border-border px-3 py-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">{use}</li>)}</ul>
                </div>
                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6">{product.specs.map((spec) => <div key={spec.label}><dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{spec.label}</dt><dd className="mt-1 text-sm text-foreground">{spec.value}</dd></div>)}</dl>
                <a href="#quote" className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-wider text-secondary-foreground transition-colors hover:text-accent">Enquire about this product <ArrowRight className="size-4" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-5 border border-border p-7 md:flex-row md:items-center"><div><h3 className="font-display text-2xl">Need another agricultural product?</h3><p className="mt-2 text-sm text-muted-foreground">Tell us your specifications and we will explore custom bulk sourcing.</p></div><Button asChild variant="outline"><a href="#quote">Discuss your requirement</a></Button></div>
      </section>

      <section id="origin" className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:items-center md:px-12">
          <div><p className="mb-4 text-xs font-semibold uppercase text-accent">Our sourcing region</p><h2 className="font-display text-5xl italic leading-[1.12] md:text-6xl">Rooted in the soil of Tamil Nadu.</h2><div className="mt-8 space-y-5 text-lg font-light leading-relaxed text-primary-foreground/75"><p>Leaflife Agro is the agricultural products division of Sree Amman Industries, operating from Coimbatore, Kangayam, and the premier Pollachi coconut belt.</p><p>Our local sourcing network helps business buyers access consistent quality, dependable volume, and coordinated supply.</p></div><div className="mt-10 grid grid-cols-3 border-l border-accent/40 pl-5"><div><strong className="font-display text-2xl text-accent">Pollachi</strong><span className="mt-1 block text-xs uppercase text-primary-foreground/55">Coconut belt</span></div><div><strong className="font-display text-2xl text-accent">Kangayam</strong><span className="mt-1 block text-xs uppercase text-primary-foreground/55">Copra hub</span></div><div><strong className="font-display text-2xl text-accent">Coimbatore</strong><span className="mt-1 block text-xs uppercase text-primary-foreground/55">Trade base</span></div></div></div>
          <div className="relative"><img src={grove} alt="Coconut groves in Tamil Nadu" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" /><div className="absolute bottom-0 left-0 bg-accent px-6 py-4 font-display text-xl text-accent-foreground">The Pollachi advantage</div></div>
        </div>
      </section>

      <section id="markets" className="border-b border-border bg-background py-20 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-12"><div className="grid gap-px bg-border md:grid-cols-3"><div className="bg-background p-8"><p className="text-xs uppercase text-accent">01</p><h3 className="mt-5 font-display text-2xl">Bulk B2B Supply</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Commercial quantities for wholesalers, processors, and distributors.</p></div><div className="bg-background p-8"><p className="text-xs uppercase text-accent">02</p><h3 className="mt-5 font-display text-2xl">Domestic Distribution</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Coordinated supply to buyers across India from Tamil Nadu.</p></div><div className="bg-background p-8"><p className="text-xs uppercase text-accent">03</p><h3 className="mt-5 font-display text-2xl">International Enquiries</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Responsive support for importers evaluating Indian agricultural supply.</p></div></div></div></section>

      <section id="quote" className="mx-auto max-w-7xl px-5 py-20 md:px-12 md:py-28">
        <div className="grid gap-12 bg-card p-7 shadow-sm md:grid-cols-[0.75fr_1.25fr] md:p-14">
          <div><p className="text-xs font-semibold uppercase text-accent">Get in touch</p><h2 className="mt-4 font-display text-5xl leading-[1.12]">Request a Quote</h2><p className="mt-5 leading-relaxed text-muted-foreground">Share your product, volume, and delivery requirements. We typically respond within one business day.</p><div className="mt-9 space-y-5 text-sm"><a className="flex items-start gap-3" href="tel:+918072323123"><Phone className="mt-0.5 size-4 text-accent" />+91 807 232 3123</a><a className="flex items-start gap-3 break-all" href="mailto:leaflife.international@gmail.com"><Mail className="mt-0.5 size-4 shrink-0 text-accent" />leaflife.international@gmail.com</a><p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" />Coimbatore & Kangayam, Tamil Nadu, India</p><a className="flex items-center gap-3 transition-colors hover:text-accent" href="https://www.linkedin.com/company/leaflife-agro/" target="_blank" rel="noreferrer"><Linkedin className="size-4 text-accent" />LeafLife Agro on LinkedIn</a><a className="flex items-center gap-3 transition-colors hover:text-accent" href="https://www.instagram.com/leaflife.agro/" target="_blank" rel="noreferrer"><Instagram className="size-4 text-accent" />@leaflife.agro on Instagram</a></div><Button asChild className="mt-8"><a href="https://wa.me/918072323123?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20agricultural%20products." target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button></div>
          <form action="https://formsubmit.co/leaflife.international@gmail.com" method="POST" className="grid gap-6 md:grid-cols-2"><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_subject" value="New Quote Request — Leaflife Agro Website" />
            <Field label="Your name" name="name" required /><Field label="Company name" name="company" /><Field label="Email address" name="email" type="email" required /><Field label="Phone number" name="phone" type="tel" required />
            <label className="grid gap-2 text-xs font-semibold uppercase">Product interest<select name="product" required className="h-12 border-b border-input bg-background px-3 text-sm font-normal text-foreground outline-none focus:border-accent"><option value="">Select a product</option><option>Fresh Pollachi Coconuts</option><option>Pollachi Copra</option><option>Cocopeat Blocks — 2 kg</option><option>Cocopeat Blocks — 5 kg</option><option>Cocopeat Powder</option><option>Firewood</option><option>Custom Agro Sourcing</option></select></label><Field label="Estimated quantity" name="quantity" />
            <label className="grid gap-2 text-xs font-semibold uppercase md:col-span-2">Additional details<textarea name="message" rows={4} className="border-b border-input bg-background p-3 text-sm font-normal text-foreground outline-none focus:border-accent" placeholder="Delivery location, frequency, specifications..." /></label><div className="md:col-span-2"><Button type="submit" size="lg">Submit quote request <ArrowRight className="ml-3 size-4" /></Button></div>
          </form>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 md:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><img src={logo} alt="LeafLife Organics" className="h-20 w-auto object-contain object-left" /><p className="mt-2 text-xs uppercase text-muted-foreground">A unit of Sree Amman Industries</p></div><p className="text-xs text-muted-foreground">Pollachi · Coimbatore · Kangayam</p><div className="flex items-center gap-5"><a href="https://www.linkedin.com/company/leaflife-agro/" target="_blank" rel="noreferrer" aria-label="LeafLife Agro on LinkedIn" className="text-muted-foreground transition-colors hover:text-accent"><Linkedin className="size-5" /></a><a href="https://www.instagram.com/leaflife.agro/" target="_blank" rel="noreferrer" aria-label="LeafLife Agro on Instagram" className="text-muted-foreground transition-colors hover:text-accent"><Instagram className="size-5" /></a><p className="text-xs text-muted-foreground">© 2026 Leaflife Agro. All rights reserved.</p></div></div></footer>
    </main>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-xs font-semibold uppercase">{label}<input name={name} type={type} required={required} className="h-12 border-b border-input bg-background px-3 text-sm font-normal text-foreground outline-none focus:border-accent" /></label>;
}
