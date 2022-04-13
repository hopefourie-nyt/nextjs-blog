import { useRouter } from "next/router";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Test() {
  const router = useRouter();
  const { data, error } = useSwr(
    router.query.id ? `/api/tests/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load tests</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <div>{JSON.stringify(data.config)}</div>
    </div>
  );
}
