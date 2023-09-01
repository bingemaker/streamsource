export type Entry = {
  id: number;
  title: string;
  year: number;
  otts: [
    {
      name: "Netflix" | "Amazon Prime" | "Disney+";
      countries: string[] | "All";
      added_date: Date;
      removed_date: Date | null;
      free: boolean;
    }
  ];
  imdb: {
    id: string;
    url: string;
  };
};
