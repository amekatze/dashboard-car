import Image from "next/image";

export default function Media() {
  return (
    <div className="col-span-1 row-span-2 bg-[#2B2B35] rounded-xl media px-4 py-8 flex flex-col justify-between">
      <div className="flex justify-between gap-5">
        <div>
          <Image
            src="/images/evenflow.jpeg"
            width={114}
            height={114}
            alt="Battery"
            loading="lazy"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="font-bold text-xl">Even Flow</span>
              <span className="text-sm">Purple Jam</span>
            </div>
            <Image
              src="/icons/spotify-icon.svg"
              width={40}
              height={40}
              alt="Battery"
              loading="lazy"
              className="rounded-full"
            />
          </div>
          <span className="bg-[#3E3E58] mt-8 h-1 rounded-xl w-full flex items-center">
            <div className="bg-[#3E8AFC] w-[158px] h-[5px] rounded-xl"></div>
          </span>
          <div className="text-xs flex justify-between mt-[-2px]">
            <span>3:17</span>
            <span>4:52</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-6">
        <Image
          src="/icons/fluent_arrow-shuffle-16-filled.svg"
          width={30}
          height={30}
          alt="Battery"
          loading="lazy"
          className="rounded-full"
        />
        <Image
          src="/icons/fluent_previous-32-filled.svg"
          width={30}
          height={30}
          alt="Battery"
          loading="lazy"
          className="rounded-full"
        />
        <Image
          src="/icons/fluent_pause-28-filled.svg"
          width={70}
          height={70}
          alt="Battery"
          loading="lazy"
          className="rounded-full bg-[#3E8AFC] p-4"
        />
        <Image
          src="/icons/fluent_next-48-filled.svg"
          width={30}
          height={30}
          alt="Battery"
          loading="lazy"
          className="rounded-full"
        />
        <Image
          src="/icons/mi_repeat.svg"
          width={30}
          height={30}
          alt="Battery"
          loading="lazy"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
