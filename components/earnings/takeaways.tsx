import { Card, CardContent } from "@/components/ui/card";

export function Takeaways({ items }: { items: string[] }) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Key Takeaways</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">What mattered this quarter</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4">
          {items.map((item, index) => (
            <div key={item} className="flex gap-4 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-4">
              <span className="mt-0.5 text-sm font-semibold text-brand-200">0{index + 1}</span>
              <p className="text-sm leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
