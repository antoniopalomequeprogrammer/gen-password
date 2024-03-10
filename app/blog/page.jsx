import React from "react";
import Card from "@/components/Card";
const Blog = () => {
  return (
    <div className="p-4">
      <h1 className="max-w-6xl mx-auto mb-10 text-center text-slate-500">Blog </h1>
      <div className="mt-4 grid max-w-6xl mx-auto md:grid-cols-2 gap-4 lg:grid-cols-3">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    
      </div>
    </div>
  );
};

export default Blog;