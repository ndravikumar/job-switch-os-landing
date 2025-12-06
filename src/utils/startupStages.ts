export const stages = [
  {
    id: 1,
    label: "Validation",
    description: "Collecting early feedback",
    completed: true,
  },
  {
    id: 2,
    label: "MVP Stage",
    description: "Building core features",
    completed: false,
  },
  {
    id: 3,
    label: "Beta Waitlist",
    description: "Gathering first 100 users",
    completed: false,
  },
  {
    id: 4,
    label: "Private Beta",
    description: "Testing with real users",
    completed: false,
  },
  {
    id: 5,
    label: "Public Launch",
    description: "Releasing V1",
    completed: false,
  },
];

export function getCurrentStage() {
  return stages.find((s) => !s.completed) || stages[stages.length - 1];
}
