import { StaggeredTestimonials } from "@/components/ui/staggered-testimonials"

export const staggeredTestimonialsUsageCode = `import { StaggeredTestimonials } from "@/components/ui/staggered-testimonials"

const testimonials = [
  {
    testimonial: "My favorite solution in the market. We work 5x faster with COMPANY.",
    by: "Alex, CEO at TechCorp",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    testimonial: "I'm confident my data is safe with COMPANY. I can't say that about other providers.",
    by: "Dan, CTO at SecureNet",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    testimonial: "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
    by: "Stephanie, COO at InnovateCo",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  }
];

export default function App() {
  return (
    <div className="w-full flex items-center justify-center p-8">
      <StaggeredTestimonials
        testimonials={testimonials}
        containerHeight={500}
      />
    </div>
  )
}
`

const sampleTestimonials = [
    {
        testimonial: "My favorite solution in the market. We work 5x faster with COMPANY.",
        by: "Alex, CEO at TechCorp",
        imgSrc: "https://i.pravatar.cc/150?img=1"
    },
    {
        testimonial: "I'm confident my data is safe with COMPANY. I can't say that about other providers.",
        by: "Dan, CTO at SecureNet",
        imgSrc: "https://i.pravatar.cc/150?img=2"
    },
    {
        testimonial: "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
        by: "Stephanie, COO at InnovateCo",
        imgSrc: "https://i.pravatar.cc/150?img=3"
    },
    {
        testimonial: "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
        by: "Marie, CFO at FuturePlanning",
        imgSrc: "https://i.pravatar.cc/150?img=4"
    },
    {
        testimonial: "If I could give 11 stars, I'd give 12.",
        by: "Andre, Head of Design at CreativeSolutions",
        imgSrc: "https://i.pravatar.cc/150?img=5"
    },
    {
        testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
        by: "Jeremy, Product Manager at TimeWise",
        imgSrc: "https://i.pravatar.cc/150?img=6"
    },
    {
        testimonial: "Took some convincing, but now that we're on COMPANY, we're never going back.",
        by: "Pam, Marketing Director at BrandBuilders",
        imgSrc: "https://i.pravatar.cc/150?img=7"
    },
    {
        testimonial: "I would be lost without COMPANY's in-depth analytics. The ROI is EASILY 100X for us.",
        by: "Daniel, Data Scientist at AnalyticsPro",
        imgSrc: "https://i.pravatar.cc/150?img=8"
    },
    {
        testimonial: "It's just the best. Period.",
        by: "Fernando, UX Designer at UserFirst",
        imgSrc: "https://i.pravatar.cc/150?img=9"
    }
];

export const staggeredTestimonialsPreview = () => {
    return (
        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-[#ffffff] dark:bg-[#000000]">
            <StaggeredTestimonials
                testimonials={sampleTestimonials}
                containerHeight={600}
            />
        </div>
    )
}

export const staggeredTestimonialsDynamicPreview = ({ containerHeight }: any) => {
    return (
        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-[#ffffff] dark:bg-[#000000]">
            <StaggeredTestimonials
                testimonials={sampleTestimonials}
                containerHeight={containerHeight}
            />
        </div>
    )
}

export const staggeredTestimonialsEditableProps: any[] = [
    { name: 'containerHeight', type: 'number', label: 'Container Height (px)', default: 600, min: 400, max: 1000, step: 10 },
]

export const staggeredTestimonialsMeta = {
    name: "Staggered Testimonials",
    description: "A 3D perspective carousel slider that navigates through a staggered deck of review cards.",
    category: "Blocks",
    slug: "staggered-testimonials",
    tags: ["testimonials", "slider", "carousel", "3d", "cards", "reviews"],
}
