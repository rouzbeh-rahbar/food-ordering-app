import Image from "next/image";
import MenuItem from "@/components/Menu/MenuItem";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute  left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] -z-10">
          <Image src={"/sallad1.png"} alt={"sallad"} width={109} height={189} />
        </div>
        <div className="  absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} alt={"sallad"} width={107} height={195} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={"Check"} mainHeader={"Menu"} />
      </div>
      {/* ************************************************************* */}
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
