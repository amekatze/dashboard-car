export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="dashboard rounded-3xl flex flex-col justify-between p-4">
        <div className="w-full">time etc</div>
        <div className="grid grid-cols-3 grid-rows-4 grow gap-6">
          <div className="rounded-xl col-span-1 row-span-4 bg-[#2B2B35]">
            car stuff
          </div>
          <div className="col-span-2 row-span-2 rounded-xl ">map</div>
          <div className="col-span-1 row-span-2 bg-[#2B2B35] rounded-xl ">
            media
          </div>
          <div className="col-span-1 row-span-2 rounded-xl ">weather</div>
        </div>
        <div className="w-full">time etc</div>
      </div>
    </main>
  );
}
