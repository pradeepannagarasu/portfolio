"use client";

import { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  updated_at: string;
  topics: string[];
}

const GithubProof = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/pradeepannagarasu/repos?sort=updated&per_page=10"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const data = await response.json();
        
        // Filter and transform repos
        const relevantRepos = data
          .filter((repo: any) => !repo.fork && !repo.archived)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description",
            language: repo.language || "Multiple",
            stars: repo.stargazers_count,
            url: repo.html_url,
            updated_at: repo.updated_at,
            topics: repo.topics || [],
          }))
          .slice(0, 8);
        
        setRepos(relevantRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load repositories");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="github" className="section-container bg-gray-50">
      <h2 className="heading-2">GitHub Activity</h2>
      <p className="body-text mb-8 max-w-3xl">
        Recent repositories demonstrating backend systems, automation, and ML-related work.
      </p>

      {loading && (
        <div className="text-center py-12 text-gray-600">Loading repositories...</div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <p className="text-red-800">
            {error}. Please visit{" "}
            <a
              href="https://github.com/pradeepannagarasu"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>{" "}
            directly.
          </p>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="text-center py-12 text-gray-600">
          No public repositories found.
        </div>
      )}

      {!loading && repos.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {repo.name}
                </h3>
                {repo.stars > 0 && (
                  <span className="text-sm text-gray-600">
                    ⭐ {repo.stars}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {repo.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                  {repo.language}
                </span>
                <span>Updated {formatDate(repo.updated_at)}</span>
              </div>
              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <a
          href="https://github.com/pradeepannagarasu"
          target="_blank"
          rel="noopener noreferrer"
          className="link text-lg font-medium"
        >
          View all repositories on GitHub →
        </a>
      </div>
    </section>
  );
};

export default GithubProof;

