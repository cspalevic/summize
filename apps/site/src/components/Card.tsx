export type CardProps = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: CardProps) => (
  <div className="p-4 border-[0.5px] rounded-md border-solid border-slate-200">
    <h2 className="text-lg font-bold text-slate-200">{title}</h2>
    <p className="pt-3 text-base text-slate-300">{description}</p>
  </div>
);
