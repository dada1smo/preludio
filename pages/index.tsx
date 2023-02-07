import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-8 py-8">
      <div className="col-start-1 col-span-6">
        <div className="h-96 bg-gradient-to-tr from-slate-500 via-orange-300  to-amber-200" />
      </div>
      <div className="col-start-7 col-span-6 flex flex-col items-start justify-center gap-6">
        <h1 className="text-5xl lg:text-7xl font-bold underline font-sans">
          prelúdio de algo magnífico
        </h1>
        <Button label="Clique aqui" />
      </div>
    </div>
  );
}