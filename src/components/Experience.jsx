function Experience({period, company, role}) {
  return (
    <div className="flex flex-col gap-2 pl-8">
      <span>{period}</span>
      <span className="font-bold">{company}</span>
      <span>{role}</span>
    </div>
  );
}

export default Experience;
