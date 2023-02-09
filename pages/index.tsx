import Button from '@/components/Button';

export default function Home() {
  return (
    <section className="container mx-auto py-20">
      <div className="grid md:grid-cols-12 grid-cols-6 gap-8">
        <div className="col-start-1 col-span-6">
          <div className="h-96 bg-gradient-to-tr from-slate-500 via-orange-300  to-amber-200" />
        </div>
        <div className="md:col-start-7 col-start-1 col-span-6 flex flex-col items-start justify-center gap-8">
          <h1 className="text-5xl lg:text-6xl font-bold underline font-sans">
            início de algo magnífico
          </h1>
          <p className="text-xl lg:text-2xl font-sans text-slate-600">
            Faça parte do clube do livro por assinatura que lhe introduz a novos
            e excitantes talentos da literatura
          </p>
          <Button label="Assinar" variant="alt" size="lg" />
        </div>
      </div>
    </section>
  );
}
