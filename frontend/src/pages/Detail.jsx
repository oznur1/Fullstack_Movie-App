import React from 'react'
import DeleteButton from "../components/DeleteButton"
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["movie"],
    queryFn: () => api.get(`/api/movies/${id}`).then((res) => res.data),
  });

  if (isLoading) return <Loader />;

  if (error) return <Error info={error} refetch={refetch} />;

  return (
    <div className="p-10">
      <div className="flex justify-end">
        <DeleteButton id={data.id} />
      </div>

      <div className="flex flex-col gap-10 items-center md:flex-row">
        <div>
          <img
            className="rounded-md"
            src={`https://picsum.photos/seed/${data.id}/250/400`}
            alt="poster"
          />
        </div>
         </div>
    </div>

  )
}

export default Detail
