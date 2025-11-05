import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Code2, Github, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { toast } from "react-toastify"; 

const GetStarted = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!repoUrl.trim()) {
    toast.error("Please enter a GitHub repository URL");
    return;
  }

  const githubPattern = /^https?:\/\/(www\.)?github\.com\/([\w-]+)\/([\w.-]+)(\/)?$/;
  const match = repoUrl.match(githubPattern);
  if (!match) {
    toast.error("Please enter a valid GitHub repository URL");
    return;
  }

  const owner = match[2];
  const repo = match[3];

  setIsSubmitting(true);

  try {
    // Step 1️⃣ — Verify repo exists
    const checkResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (checkResponse.status === 404) {
      toast.error("Repository not found or private");
      setIsSubmitting(false);
      return;
    }

    // Step 2️⃣ — Fetch latest open PR
    const prResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/pulls?state=open&sort=created&direction=desc`
    );
    const prData = await prResponse.json();

    if (!Array.isArray(prData) || prData.length === 0) {
      toast.error("No open pull requests found in this repository");
      setIsSubmitting(false);
      return;
    }

    const pr_number = prData[0].number;
    console.log("Latest PR number:", pr_number);

    // Step 3️⃣ — Call Flask backend
    const response = await fetch("https://revai-backend-1.onrender.com/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        repo_url: repoUrl,
        pr_number: pr_number,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.error || "Failed to submit repository");
      return;
    }

    const { task_id } = data;

    // ✅ Single toast instance for live updates
    let toastId = toast.loading("🕓 Task queued. Waiting to start review...");

    // Step 4️⃣ — Poll /status every few seconds
    const pollInterval = setInterval(async () => {
      try {
        const statusRes = await fetch(`https://revai-backend-1.onrender.com/status/${task_id}`);
        const statusData = await statusRes.json();

        if (statusData.status === "pending") {
          toast.update(toastId, {
            render: "⏳ Waiting in queue...",
            type: "info",
            isLoading: true,
          });
        } else if (
          statusData.status === "in_progress" ||
          statusData.status === "progress" ||
          statusData.status === "started"
        ) {
          toast.update(toastId, {
            render: `🔍 ${statusData.message || "Reviewing..."}`,
            type: "info",
            isLoading: true,
          });
        } else if (statusData.status === "completed") {
          toast.update(toastId, {
            render: "✅ Review completed successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          clearInterval(pollInterval);
        } else if (statusData.status === "failed") {
          toast.update(toastId, {
            render: `❌ Review failed: ${statusData.message}`,
            type: "error",
            isLoading: false,
            autoClose: 4000,
          });
          clearInterval(pollInterval);
        }

      } catch (err) {
        toast.update(toastId, {
          render: "⚠️ Lost connection to backend",
          type: "error",
          isLoading: false,
          autoClose: 4000,
        });
        clearInterval(pollInterval);
      }
    }, 4000);

    setRepoUrl("");
  } catch (error) {
    console.error(error);
    toast.error("Error connecting to backend");
  } finally {
    setIsSubmitting(false);
  }
};




  const features = [
    "AI-powered code analysis",
    "Automated PR comments",
    "Security vulnerability detection",
    "Best practices suggestions",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f172a] via-[#0a1a1a] to-[#0f172a] text-[#e2e8f0]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/70 backdrop-blur-lg border-b border-[#10b981]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Code2 className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">RevAI</span>
            </button>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:text-[#10b981]"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 mb-6">
              <Github className="h-4 w-4 text-[#10b981]" />
              <span className="text-sm font-medium text-white">
                Connect Your Repository
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Start Your Code Review
            </h1>
            <p className="text-lg text-[#cbd5e1] max-w-2xl mx-auto">
              Paste your GitHub repository URL below and let our AI review your
              code, identify issues, and provide intelligent feedback on your
              pull requests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-scale-in">
            {/* Form Card */}
            <Card className="border-2 border-[#10b981]/30 bg-[#1e293b]/60 shadow-xl text-[#e2e8f0]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Github className="h-5 w-5 text-white" />
                  Repository Details
                </CardTitle>
                <CardDescription className="text-[#94a3b8]">
                  Enter your GitHub repository URL to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="repo-url" className="text-white">
                      GitHub Repository URL
                    </Label>
                    <Input
                      id="repo-url"
                      type="url"
                      placeholder="https://github.com/username/repository"
                      value={repoUrl}
                      onChange={(e) => setRepoUrl(e.target.value)}
                      className="h-12 bg-[#0f172a]/40 border-[#10b981]/30 text-[#e2e8f0] placeholder:text-[#475569]"
                      disabled={isSubmitting}
                    />
                    <p className="text-xs text-[#94a3b8]">
                      Example: https://github.com/facebook/react
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white hover:bg-[#059669] text-[#0f172a] font-semibold transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Start Review
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Features Card */}
            <Card className="border border-[#10b981]/20 bg-[#1e293b]/50 text-[#e2e8f0] backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">What You'll Get</CardTitle>
                <CardDescription className="text-[#94a3b8]">
                  Our AI-powered review includes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-white mt-0.5" />
                      <span className="text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20">
                  <p className="text-sm text-[#cbd5e1]">
                    <strong className="text-[#fef9c3]">Pro Tip:</strong> Make
                    sure your repository has open pull requests for the AI to
                    review and comment on.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[#94a3b8]">
              By submitting your repository, you agree to our terms of service
              and privacy policy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetStarted;

