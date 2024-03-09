import prisma from "@/lib/prisma";

const page = async () => {
  const entries = await prisma.entry.findMany();
  return (
    <div>
      Home page
      {entries.map((entry) => (
        <span key={entry.id}>{entry.content}</span>
      ))}
    </div>
  );
};

export default page;
