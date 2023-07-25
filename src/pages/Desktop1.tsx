import { FunctionComponent } from "react";

const Desktop1: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black font-lato">
      <div className="absolute top-[39px] left-[34px] rounded-[25px] box-border w-[1372px] h-[946px] border-[3px] border-solid border-black" />
      <img
        className="absolute top-[39px] left-[34px] w-[1372px] h-[305px] object-cover"
        alt=""
        src="/pictureshowed@2x.png"
      />
      <div className="absolute top-[478px] left-[87px] w-[458px] h-[67px]">
        <div className="absolute h-[28.36%] w-[102.84%] top-[77.61%] right-[-3.06%] bottom-[-5.97%] left-[0.22%]">
          <div className="absolute h-[89.47%] w-[31.63%] top-[5.26%] left-[0%] leading-[100%] inline-block">
            <b>
              <span>Destination :</span>
              <span className="text-sm">{` `}</span>
            </b>
            <span className="text-sm">
              <span>Gordon</span>
            </span>
          </div>
          <div className="absolute h-[89.47%] w-[32.06%] top-[5.26%] left-[38.64%] leading-[100%] inline-block">
            <b>Way of traveling :</b>
            <span className="text-sm"> car</span>
          </div>
          <div className="absolute h-full w-[20.38%] top-[0%] left-[79.62%] leading-[100%] inline-block">
            <b>
              <span>Total slots :</span>
              <span className="text-sm">{` `}</span>
            </b>
            <span className="text-sm">
              <span>4</span>
            </span>
          </div>
        </div>
        <b className="absolute h-[31.34%] w-[32.1%] top-[0%] left-[0%] text-xl leading-[100%] inline-block">
          Name of the trip
        </b>
      </div>
      <div className="absolute top-[597px] left-[124px] leading-[100%] inline-block w-[479px] h-[140px] text-sm">
        <p className="m-0 text-base">
          <b>Description :</b>
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <img
        className="absolute top-[347px] left-[74px] w-[965px] h-[111px]"
        alt=""
        src="/pictures.svg"
      />
      <div className="absolute top-[306px] left-[980px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[357px] h-[157px] text-[inherit]">
        <div className="absolute top-[31px] left-[213px] leading-[100%] inline-block w-[161px] h-[99px]">
          <p className="m-0">
            <b>{`Include : `}</b>
          </p>
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">
              <span>Blablah</span>
            </li>
            <li className="mb-0">
              <span>blahblah</span>
            </li>
          </ul>
          <p className="m-0">
            <b>&nbsp;</b>
          </p>
          <p className="m-0">
            <b>{`Not include : `}</b>
          </p>
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">
              <span>Miam miam</span>
            </li>
            <li>
              <span>Glouglou</span>
            </li>
          </ul>
        </div>
        <b className="absolute top-[calc(50%_-_24.5px)] left-[46px] text-[48px] leading-[100%]">
          50 €
        </b>
      </div>
      <div className="absolute top-[898px] left-[1208px] h-12 flex flex-row py-0.5 px-0 box-border items-center justify-center text-sm text-white">
        <div className="rounded bg-mediumblue shadow-[0px_2px_4px_rgba(136,_144,_194,_0.2),_0px_5px_15px_rgba(37,_44,_97,_0.15)] overflow-hidden flex flex-row py-4 px-8 items-center justify-center">
          <b className="relative leading-[100%]">Contact</b>
        </div>
      </div>
      <b className="absolute top-[876px] left-[1194px] leading-[100%]">
        <span>Slots availables :</span>
        <span className="text-sm"> 2</span>
      </b>
      <div className="absolute top-[826px] left-[194px] w-[123px] h-[123px]">
        <div className="absolute top-[6px] left-[158px] leading-[100%] inline-block w-[720px]">
          <p className="m-0">
            <b>
              <span>The Triper</span>
            </b>
          </p>
          <p className="m-0 text-sm">
            <span>
              <b>&nbsp;</b>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </span>
            </span>
          </p>
        </div>
        <img
          className="absolute h-[101.4%] w-[104.2%] top-[0%] right-[-4.2%] bottom-[-1.4%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/sans-titre-2@2x.png"
        />
      </div>
      <div className="absolute top-[506px] left-[720px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[617px] h-[244px] text-xl">
        <div className="absolute h-[18.85%] w-[21.72%] top-[39.75%] right-[73.74%] bottom-[41.39%] left-[4.54%]">
          <div className="absolute h-[102.17%] w-[0.75%] top-[-1.09%] right-[47.39%] bottom-[-1.09%] left-[51.87%] box-border border-r-[1px] border-solid border-black" />
          <div className="absolute top-[calc(50%_-_10px)] left-[0%] leading-[100%]">
            09:00
          </div>
          <div className="absolute top-[calc(50%_-_8px)] left-[65.67%] text-base leading-[100%]">
            Hiking
          </div>
        </div>
        <div className="absolute h-[18.85%] w-[25.45%] top-[69.26%] right-[70.02%] bottom-[11.89%] left-[4.54%] text-base">
          <div className="absolute h-[102.17%] w-[0.64%] top-[-1.09%] right-[55.1%] bottom-[-1.09%] left-[44.27%] box-border border-r-[1px] border-solid border-black" />
          <div className="absolute top-[calc(50%_-_8px)] left-[56.05%] leading-[100%]">
            Way back
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[0%] text-xl leading-[100%]">
            20:00
          </div>
        </div>
        <div className="absolute h-[18.85%] w-[37.93%] top-[10.25%] right-[57.54%] bottom-[70.9%] left-[4.54%]">
          <div className="absolute h-[102.17%] w-[0.43%] top-[-1.09%] right-[69.87%] bottom-[-1.09%] left-[29.7%] box-border border-r-[1px] border-solid border-black" />
          <div className="absolute top-[calc(50%_-_10px)] left-[0%] leading-[100%]">
            08:00
          </div>
          <div className="absolute top-[calc(50%_-_8px)] left-[37.61%] text-base leading-[100%]">
            Departure from Nice
          </div>
        </div>
        <div className="absolute top-[83.5px] left-[calc(50%_-_295px)] box-border w-[591px] h-px border-t-[1px] border-solid border-black" />
        <div className="absolute top-[155.5px] left-[calc(50%_-_295px)] box-border w-[591px] h-px border-t-[1px] border-solid border-black" />
      </div>
    </div>
  );
};

export default Desktop1;
