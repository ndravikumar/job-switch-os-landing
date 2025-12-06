import { stages } from "../utils/startupStages";

export default function StartupProgress() {
  const completedCount = stages.filter((s) => s.completed).length;
  const percent = Math.round((completedCount / stages.length) * 100);

  return (
    <div className="w-full max-w-3xl mx-auto my-12 p-6 bg-card border border-border rounded-xl">
      <p className="text-gray-300 text-sm mb-3">
        Startup Progress – {percent}%
      </p>

      {/* Bar */}
      <div className="relative w-full bg-gray-800 rounded-full h-2 mb-6 overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Milestones */}
      <div className="flex justify-between text-xs text-gray-400">
        {stages.map((stage) => (
          <div key={stage.id} className="flex flex-col items-center w-full">
            <div
              className={`
                w-3 h-3 rounded-full mb-2 
                ${stage.completed ? "bg-primary" : "bg-gray-600"}
              `}
            />
            <p
              className={`${
                stage.completed ? "text-primary" : "text-gray-400"
              }`}
            >
              {stage.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
