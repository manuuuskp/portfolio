function Hero() {
  return (
    <section>
      <div className="flex justify-center items-center min-h-[75vh] rounded-2xl bg-[#141414] my-16 bg-[linear-gradient(52deg,#fcd2e9,#bdffee,#fffeae,#b8dcff)] bg-[length:800%_800%] animate-gradient">
        <div className="text-black p-5 w-[720px] flex flex-col gap-5">
          <span className="font-bold">Hey, I’m Manoj Prabhu, 🖖</span>
          <span className="text-[15px]">
            Senior Software Engineer based in India, with over a decade of
            experience in developing business and consumer applications. Over
            the years I have been a part of the team that has launched world
            class products and have been contributing in both Frontend and
            Backend.
          </span>
          <span className="text-[15px]">
            Currently building a Social Intelligence tool at <a className="text-[#637CEC] pl-1" target="_blank" href="https://www.meltwater.com/">Meltwater</a> -
            previously worked for <a className="text-[#637CEC] pl-1" target="_blank" href="https://www.publicissapient.com/">Publicis Sapient</a>, <a className="text-[#637CEC] pl-1" target="_blank" href="https://www.verticurl.com/">Verticurl</a>, <a className="text-[#637CEC] pl-1" target="_blank" href="https://www.vaken.io/">Vaken</a> and
            <a className="text-[#637CEC] pl-1" target="_blank" href="https://ivtlinfoview.com/">Infoview</a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
