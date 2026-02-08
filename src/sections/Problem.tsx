import { pageConfig } from "../content/page/page.config";

export default function Problem() {
  const problem = pageConfig.problem;

  if (!problem?.enabled) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-8">
        {problem.headline}
      </h2>

      {Array.isArray(problem.points) && problem.points.length > 0 && (
        <ul className="space-y-4 text-gray-700">
          {problem.points.map((point, index) => (
            <li key={index} className="flex gap-2">
              <span aria-hidden>–</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}