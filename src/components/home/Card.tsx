import Image from "next/image";

const Card = () => {
  return (
    <div className="w-[1308px] h-[350px] gap-[30px]">
      <div className="w-[270px] h-[350] gap-[16px]">
        <div className="w-[270px] h-[250px] gap-0 rounded-tl-[4px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] bg-[#f5f5f5]">
          <div className="ml-11">
            <Image src="/s1.png" width={190} height={180} alt="s1.png" />
          </div>
        </div>

        <div className="w-[201px] h-[84px] gap-8">
          <span className="w-[201px] h-[24x] gap-0">HAVIT HV-G92 Gamepad </span>
          <span className="w-[65px] h-[24px] gap-12">$120 $160 </span>
          <span className="w-[140px] h-[20px] gap-8">(88)</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
