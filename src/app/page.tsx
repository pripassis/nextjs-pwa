"use client";
import { Post } from "@/api/api";
import { Item } from "@/models/post.interface";
import { useEffect, useState } from "react";

export default function Home() {
  //add
  const [posts, setPosts] = useState<Item[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  //add
  useEffect(() => {
    Post.getNoticia()
      .then((data) => {
        setPosts(data.items);
      })
      .catch((err) => {
        setIsError(true);
      });
    return () => {};
  }, []);

  return (
    <div className="flex">
      <div>
        <div className="mt-5 mx-auto w-auto">
          {/* Modify this section */}
          {isError ? (
            <div className="mt-1 font-bold text-xl text-red-500">
              Oop!!! Error getting posts
            </div>
          ) : (
            posts.map((post) => (
              <div
                className="flex flex-col mb-3 border rounded m-3 py-2 px-4"
                key={post.id}
              >
                <h1 className="flex-1 text-2xl">{post.titulo}</h1>
                <div className="flex">{post.introducao}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
