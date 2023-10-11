import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex gap-4 nav">
      <div className="flex items-center justify-center">
        <Image
          src="/icons/Phone.svg"
          width={50}
          height={50}
          alt="Phone Icon"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/icons/Car.svg"
          width={50}
          height={50}
          alt="Car Icon"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/icons/MapPin.svg"
          width={50}
          height={50}
          alt="Map Icon"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/icons/Apps.svg"
          width={50}
          height={50}
          alt="App Icon"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/icons/Gear.svg"
          width={50}
          height={50}
          alt="Gear Icon"
          loading="lazy"
        />
      </div>
    </div>
  );
}
