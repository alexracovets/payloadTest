import { useEffect, useState } from 'react';

interface NavigationItem {
  link: string;
  title: string;
}

export function useNavigationHome() {
  const [navigation, setNavigation] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/navigationHome`,
          { next: { revalidate: 3600 } }
        );
        const data = await response.json();
        setNavigation(data.docs);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchNavigation();
  }, []);

  return { navigation, loading, error };
} 