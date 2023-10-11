import { Clock } from "@/components/Clock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="dashboard rounded-3xl flex flex-col justify-between p-5">
        <div className="w-full h-16 flex justify-between">
          <div className="flex flex-col">
            <Clock />
          </div>
          <div className="flex gap-4 justify-center h-6  items-center ">
            <div>
              <Image
                src="/icons/battery.png"
                width={24}
                height={12}
                alt="Battery"
                loading="lazy"
              />
            </div>
            <div className="flex gap-1">
              <div>
                <Image
                  src="/icons/Bluetooth.png"
                  width={18}
                  height={12}
                  alt="Battery"
                  loading="lazy"
                  className="mt-[2px]"
                />
              </div>

              <span>Sam Phone</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 grow gap-6">
          <div className="rounded-xl col-span-1 row-span-4 bg-[#2B2B35]">
            car stuff
          </div>
          <div className="col-span-2 row-span-2 rounded-xl map">map</div>
          <div className="col-span-1 row-span-2 bg-[#2B2B35] rounded-xl ">
            media
          </div>
          <div className="col-span-1 row-span-2 rounded-xl weather">
            weather
          </div>
        </div>
        <div className="w-full h-24">time etc</div>
      </div>
    </main>
  );
}
