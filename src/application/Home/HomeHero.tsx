import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'

const HomeHero = () => {
  return (
    <Container className="pt-20 text-center">
        <FadeIn
          className="container flex max-w-[64rem] h-screen flex-col items-center gap-5 text-center"
        >
          <div
            className="flex xl:justify-center">
            <img
              src="/images/background-santrimu.webp"
              decoding="async"
              loading="lazy"
              alt="Santri-MU"
              width="300"
              height="300"
              className="mt-1 max-w-full"
            />
          </div>
          <div
            className="flex flex-col items-center text-center"
          >
            <h1
              className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.1] text-balance"
            >
              <span className="text-gradient_indigo-purple">
                Santri MU
              </span>
            </h1>
            <h2 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 text-2xl">
              Berbagi dalam kebaikan
            </h2>
            <div className="relative -z-10"></div>
          </div>

          <div
            className="flex flex-col items-center text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-balance"
          >
            Aplikasi Satri-MU digagas untuk memenuhi kebutuhan management dan sistem
            informasi pondok, yang bisa di manfaatkan oleh pengelola, yayasan, maupun
            wali santri

            <p className="text-green-500 text-bold text-center pt-10">
              v.1.0.1 Beta
            </p>
          </div>
        </FadeIn>
    </Container>
  );
};
export default HomeHero;
