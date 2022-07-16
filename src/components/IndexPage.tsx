import { trpc } from "../utils/trpc";

const IndexPage = () => {
  const greeting = trpc.useQuery(['core.greeting', { text: 'philip' }])
  if (!greeting.data) return <div>Loading...</div>
  return (
    <div>
      <p>{greeting.data.greeting}</p>
    </div>
  )
};

export default IndexPage;
