export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-bg text-gray-100 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 You're In!</h1>

        <p className="text-gray-300 text-lg mb-6">
          Thanks for joining the{" "}
          <span className="text-primary font-semibold">Job Switch OS</span>{" "}
          early access waitlist.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <p className="text-gray-200 mb-3">Here's what happens next:</p>

          <ul className="text-left text-gray-300 space-y-2">
            <li>
              • We will send your personalized early-access invite if selected.
            </li>
            <li>
              • You might receive questions to understand your job-switch goals
              better.
            </li>
          </ul>
        </div>

        <a
          href="https://www.linkedin.com/in/naramala-durga-ravikumar-38b43812a/"
          target="_blank"
          className="inline-block bg-primary hover:bg-primaryDark transition px-6 py-3 rounded-full text-sm font-medium text-white"
        >
          Connect with the Founder on LinkedIn
        </a>

        <p className="text-gray-400 text-sm mt-4">
          Stay tuned — big things are coming for your career 🚀
        </p>
      </div>
    </div>
  );
}
