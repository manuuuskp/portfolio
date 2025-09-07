function Project({
  company,
  logo,
  description,
  role,
  responsibilities,
  techStack,
}) {
  return (
    <article>
      <div className="flex justify-center my-10">
        <div className="flex w-7xl gap-x-16">
          <div
            style={{ backgroundImage: `url(${logo})` }}
            className={`min-h-[400px] columns-1 
  p-4 
  rounded-2xl 
  bg-contain 
  bg-no-repeat 
  bg-center flex-1 bg-[#ffe9db]`}
          >
            <div>
              <span
                className="px-3 py-1 
    rounded-xl 
    text-[0.85rem] 
    w-fit 
    bg-[#efefef] 
    text-[#747474] 
    whitespace-nowrap"
              >
                {company}
              </span>
            </div>
          </div>
          <div className="flex-1 pt-10 flex flex-col gap-4">
            <span className="font-bold">{description}</span>
            <span className="text-[#747474] text-justify">
              {responsibilities}
            </span>
            <span className="text-[#747474]">{role}</span>
            <div className="flex gap-2 mt-3">
              {techStack.map((tech) => (
                <div key={tech}>
                  <span
                    className="px-3 py-1 
        rounded-xl 
        text-[0.85rem] 
        w-fit 
        bg-[#efefef] 
        text-[#747474] 
        whitespace-nowrap"
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
