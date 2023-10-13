import Image from "next/image";

export default function Weather() {
  return (
    <div className="col-span-1 row-span-2 rounded-xl weather p-8 flex flex-col justify-between">
      <div>
        <div className="font-bold text-2xl flex gap-2">
          24°C
          <Image
            src="/icons/Sun_clouds.svg"
            width={28}
            height={28}
            alt="Battery Icon"
            loading="lazy"
          />
        </div>
        <div className="text-sm">Sunny with clouds</div>
      </div>
      <div className="text-sm">Humidity 86%</div>
    </div>
  );
}
