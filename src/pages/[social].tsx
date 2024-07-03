import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageNotFound from "./404";

export default function DynamicPage() {
  const router = useRouter();
  const { social } = router.query;
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSocialData = async () => {
      const { Socials } = await import("@/data/social");
      const res = Socials.find((item) => item.name === social);
      if (res) {
        window.location.href = res.link;
      } else {
        setError(true);
      }
    };

    if (social) {
      fetchSocialData();
    }
  }, [social]);

  return (
    <div>
      {error ? (
        <PageNotFound />
      ) : (
        <div className="mt-20 flex flex-wrap justify-center px-5 text-center text-xl sm:text-3xl">
          Redirecting to
          <span className="mx-1 font-bold">Sooraj's</span>
          <h1 className="mx-1 capitalize">{social}</h1>
          profile.....
        </div>
      )}
    </div>
  );
}
