import { Item } from "@/models/post.interface";

interface ICardProps {
  id: string;
  imagens: string;
  titulo: string;
  introducao: string;
  link: string;
}

export default function Card(item: ICardProps) {
  return (
    <div className="flex flex-col mb-4 px-4 " key={item.id}>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={item.imagens} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.titulo}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.introducao}
          </p>
          <a
            href={item.link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Leia mais
          </a>
        </div>
      </div>
    </div>
  );
}
