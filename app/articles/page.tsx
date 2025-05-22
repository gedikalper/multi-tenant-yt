import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getArticles } from "../data/get-articles";

const ArticlesPage = async () => {
  const data = await getArticles();

  if (data.length === 0) {
    return (
      <div className="text-5xl font-semibold mt-48 flex w-full items-center justify-center">
        No articles found, sorry
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0 gap-3"
          >
            {item.imageUrl && (
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <CardHeader>
              <h2 className="text-xl font-bold truncate">{item.title}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                {item.content}
              </p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <button className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md">
                Read More
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
