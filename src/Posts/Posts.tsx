import { useState } from "react";
import { axiosGetPosts } from "../axios/axios";
import { useQuery } from "react-query";
import Button from "../components/UI/Button/Button";

interface getPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getMorePosts(pages: number) {
  const response = await axiosGetPosts(pages);

  return response.data;
}

export default function Posts() {
  const [posts, setPosts] = useState(5);
  const { data, isError, isLoading } = useQuery(
    ["evgenii", posts],
    () => getMorePosts(posts),
    {
      keepPreviousData: true,
    }
  );

  if (posts === 0) {
    setPosts(5);
  }

  console.log(data);

  if (isError) {
    return <span>Ошибка загрузки данных</span>;
  }

  if (isLoading) {
    return <span>Pагрузки данных....</span>;
  }

  if (!data) {
    return <span>Нет данных</span>;
  }

  return (
    <>
      {data.map((item: getPosts) => {
        return (
          <div key={item.id} style={{margin:"15px", border:"1px solid gray"}}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px"}}>
              <h5>{item.id}</h5>
              <span>{item.title}</span>
            </div>
            <span>{item.body}</span>
          </div>
        );
      })}
      <div>
        <Button text="Добавить" onClick={() => setPosts((post) => post + 5)} />
        <Button text="Удалить" onClick={() => setPosts((post) => post - 5)} />
      </div>
    </>
  );
}
