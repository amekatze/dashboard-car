import Image from "next/image";
import { Clock } from "@/components/Clock";
import Nav from "@/components/Nav";
import GearSetting from "@/components/GearSetting";
import Weather from "@/components/Weather";
import Media from "@/components/Media";

export default function Home() {
  return (
    <main className="m-2 h-full w-full">
      <div className="dashboard rounded-3xl flex flex-col justify-between p-5">
        <div className="w-full h-16 flex justify-between">
          <div className="flex flex-col">
            <Clock />
          </div>
          <div className="flex gap-4 justify-center h-6 items-center ">
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
          <div className="rounded-xl col-span-1 row-span-4 bg-[#2B2B35] car-info flex flex-col gap-6 items-center overflow-hidden py-10 px-3">
            <div className="bg-[#27272D] border-[1.4px] border-[#3E3E58] rounded-3xl h-20 w-40 self-end mr-[-60px] speed flex flex-col items-center justify-center pr-2">
              <span className="font-bold text-4xl">76</span>
              <span>km/h</span>
            </div>
            <div className="h-48 w-full flex items-center justify-center">
              <Image
                src="/images/white-suv.webp"
                width={220}
                height={220}
                alt="Battery Icon"
                loading="lazy"
              />
            </div>
            <div className="w-full bg-[#27272D] border-[1.4px] border-[#3E3E58] rounded-2xl flex flex-col overflow-hidden">
              <div className="flex justify-end self-end w-52 bg-[#3E8AFC] rounded-2xl px-2 py-1">
                <Image
                  src="/icons/Lightning.svg"
                  width={14}
                  height={14}
                  alt="Battery Icon"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex gap-4 justify-between mt-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/Lightning-Blue.svg"
                    width={14}
                    height={14}
                    alt="Battery Icon"
                    loading="lazy"
                  />
                  <b>208</b>km
                </div>
                <span className="text-xs text-[#9DBADA]"> Remaining</span>
              </div>

              <div className="flex flex-col gap-1">
                <span>
                  <b>134</b> wh/km
                </span>
                <span className="text-xs text-[#9DBADA]">Average</span>
              </div>

              <div className="flex flex-col gap-1">
                <span>
                  <b>35</b> kWh
                </span>
                <span className="text-xs text-[#9DBADA]">Full Capacity</span>
              </div>
            </div>

            <div className="bg-[#27272D] border-[1.4px] border-[#3E3E58] rounded-2xl mt-2 flex justify-around w-full text-4xl ">
              <GearSetting />
            </div>
          </div>
          <div className="col-span-2 row-span-2 rounded-xl map">
            <div className="flex flex-col justify-center items-center gap-3 ml-10 mt-10 p-3 w-fit h-fit bg-[#3E8AFC] rounded-xl navigator">
              <div className="flex h-10 justify-center gap-4 items-center ">
                <Image
                  src="/icons/ArrowElbowUpRight.svg"
                  width={50}
                  height={50}
                  alt="Battery Icon"
                  loading="lazy"
                />
                <span className="text-2xl font-bold">900 m</span>
              </div>
              <div className="text-sm">Turn Right To Brusselstreet</div>
            </div>
          </div>

          <Media />
          <Weather />
        </div>
        <div className="flex w-full pt-4 h-26 items-center justify-center">
          <Nav />
        </div>
      </div>
    </main>
  );
}
