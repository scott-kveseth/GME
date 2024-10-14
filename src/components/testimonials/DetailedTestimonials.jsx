import { testimonials } from "@/components/home/Testimonials";

export default function DetailedTestimonials() {
  return (
    <div>
      <div className="py-32 bg-secondary text-center">
        <h1 className="text-[64px] font-semibold text-white">Testimonials</h1>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #249690, #F4F4F4)",
        }}
      >
        <div className="max-w-7xl mx-auto text-black pb-24">
          <div className="grid grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.title} className="pt-6 pb-12">
                <div className="font-semibold tracking-wider mb-8 text-[24px] text-white italic">
                  {t.title}
                </div>
                <div className="border-t-4 border-glen w-[80px]" />
                {t.texts.map((text) => (
                  <div
                    key={text}
                    className={`border tracking-wider mb-4 max-w-xl text-gray bg-[#f3efe5] bubble bubble-right px-6 py-4 text-[18px]`}
                  >
                    {text}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
