"use client";
import { Post } from "@/api/api";
import Card from "@/components/Card";
import { Item } from "@/models/post.interface";
import { useEffect, useState } from "react";

export default function Home() {
  //add
  const [posts, setPosts] = useState<Item[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  //add
  useEffect(() => {
    Post.getNoticia({ de: "03-01-2024" })
      .then((data) => {
        setPosts(data.items);
      })
      .catch((err) => {
        setIsError(true);
      });
    return () => {};
  }, []);

  return (
    <div className="flex flex-1">
      <div>
        <div className="mt-5">
          {/* Modify this section */}
          {isError ? (
            <div className="mt-1 font-bold text-xl text-red-500">
              Oop!!! Error getting posts
            </div>
          ) : (
            posts.map((post) => (
              <Card
                id={post.id + ""}
                imagens={post.imagens}
                introducao={post.introducao}
                link={post.link}
                titulo={post.titulo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
