// src/pages/Course.tsx
import React from "react";

const CoursePage: React.FC = () => {
  return (
    <main className="container">
      <section className="hero-section">
        <h1>Course Curriculum</h1>
        <p>Tracking my learning journey and technical milestones.</p>
      </section>

      <section className="section-wrapper">
        <div className="flex-grid">
          {/* We will map your fetched JSON data here later */}
          <article className="card">
            <div className="card-body">
              <h3>React & TypeScript Bootcamp</h3>
              <p>Mastering modern frontend architecture.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CoursePage;
